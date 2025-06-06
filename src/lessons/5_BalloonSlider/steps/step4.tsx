import { AnimatedText } from "@/components/AnimatedText";
import { Container } from "@/components/Container";
import { hitSlop, radToDeg } from "@/lib/reanimated";
import { colorShades, layout } from "@/lib/theme";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  clamp,
  interpolate,
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export function BalloonSliderLesson() {
  const scale = useSharedValue(0);
  const x = useSharedValue(0);
  const progress = useSharedValue(0);

  const aRef = useAnimatedRef<View>();

  const panGesture = Gesture.Pan()
    .averageTouches(true)
    .activateAfterLongPress(1)
    .onBegin(() => {
      scale.value = withSpring(1);
    })
    .onChange((ev) => {
      const size = measure(aRef);
      x.value = clamp((x.value += ev.changeX), 0, size.width);
      progress.value = 100 * (x.value / size.width);
    })
    .onEnd(() => {
      scale.value = withSpring(0);
    });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: interpolate(
        scale.value,
        [0, 1],
        [layout.knobSize / 2, 2],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateX: x.value,
        },
        {
          scale: scale.value + 1,
        },
      ],
    };
  });

  const balloonAngle = useDerivedValue(() => {
    return 90 + radToDeg(Math.atan2(-layout.indicatorSize * 2, 0));
  });

  const balloonStyle = useAnimatedStyle(() => {
    return {
      opacity: scale.value,
      transform: [
        { translateX: x.value },
        { scale: scale.value },
        {
          translateY: interpolate(
            scale.value,
            [0, 1],
            [0, -layout.indicatorSize]
          ),
        },
        {
          rotate: `${balloonAngle.value}deg`,
        },
      ],
    };
  });

  return (
    <Container>
      <GestureDetector gesture={panGesture}>
        <View ref={aRef} style={styles.slider} hitSlop={hitSlop}>
          <Animated.View style={[styles.balloon, balloonStyle]}>
            <View style={styles.textContainer}>
              <AnimatedText
                text={progress}
                style={{ color: "white", fontWeight: "600" }}
              />
            </View>
          </Animated.View>
          <Animated.View style={[styles.progress, { width: x }]} />
          <Animated.View style={[styles.knob, animatedStyle]} />
        </View>
      </GestureDetector>
    </Container>
  );
}

const styles = StyleSheet.create({
  knob: {
    width: layout.knobSize,
    height: layout.knobSize,
    borderRadius: layout.knobSize / 2,
    backgroundColor: "#fff",
    borderWidth: layout.knobSize / 2,
    borderColor: colorShades.purple.base,
    position: "absolute",
    left: -layout.knobSize / 2,
  },
  slider: {
    width: "80%",
    backgroundColor: colorShades.purple.light,
    height: 5,
    justifyContent: "center",
  },
  textContainer: {
    width: 40,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorShades.purple.base,
    position: "absolute",
    top: -layout.knobSize,
  },
  balloon: {
    alignItems: "center",
    justifyContent: "center",
    width: 4,
    height: layout.indicatorSize,
    bottom: -layout.knobSize / 2,
    borderRadius: 2,
    backgroundColor: colorShades.purple.base,
    position: "absolute",
  },
  progress: {
    height: 5,
    backgroundColor: colorShades.purple.dark,
    position: "absolute",
  },
});
