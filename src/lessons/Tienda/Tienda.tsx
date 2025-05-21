import { ShoeDetails } from "@/components/ShoeDetails";
import { ShoeGallery } from "@/components/ShoeGallery";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function Header() {
  const [isFocused, setFocus] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined
  );
  const inputRef = useRef<TextInput>(null);

  const handleCancel = () => {
    if (inputRef?.current) {
      inputRef.current.blur();
      inputRef.current.clear();
    }
  };

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            transitionProperty: ["opacity", "marginTop"],
            transitionDuration: 200,
            transitionTimingFunction: "ease-in-out",
            opacity: isFocused ? 0 : 1,
            marginTop: isFocused ? -headerHeight! : 0,
          },
        ]}
        onLayout={(event) => {
          if (headerHeight === undefined) {
            setHeaderHeight(event.nativeEvent.layout.height);
          }
        }}
      >
        <Text style={styles.headerText}>tienda</Text>
      </Animated.View>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <EvilIcons name="search" size={24} color="#64748b" />
          <TextInput
            ref={inputRef}
            placeholder="Search"
            placeholderTextColor={"black"}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            style={styles.searchBarTextInput}
          />
        </View>
        <AnimatedPressable
          onPress={handleCancel}
          style={[
            styles.button,
            {
              transitionProperty: ["width", "marginLeft"],
              transitionDuration: 200,
              transitionTimingFunction: "ease-in-out",
              width: isFocused ? 50 : 0,
              marginLeft: isFocused ? 8 : 0,
            },
          ]}
        >
          <Text
            style={styles.buttonText}
            numberOfLines={1}
            ellipsizeMode="clip"
          >
            Cancel
          </Text>
        </AnimatedPressable>
      </View>
    </>
  );
}

function Details() {
  const [dimenstions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  return (
    <View style={styles.content}>
      <View
        style={{
          width: dimenstions.width + 2,
          height: dimenstions.height + 2,
          transform: [{ translateX: -1 }, { translateY: -1 }],
          position: "absolute",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{
            width: 20,
            height: dimenstions.width / 2 + 2,
            transformOrigin: "10px 0",
            backgroundColor: "#0f172a",
            top: dimenstions.height / 2,

            animationName: {
              "0%": { transform: [{ rotateZ: "0deg" }] },
              "100%": { transform: [{ rotateZ: "360deg" }] },
            },
            animationDuration: "4s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      </View>
      <View
        style={styles.popular}
        onLayout={(event) => {
          setDimensions(event.nativeEvent.layout);
        }}
      >
        <Animated.View
          style={{
            animationName: {
              "0%": { transform: [{ rotate: "0deg" }] },
              "15%": { transform: [{ rotate: "7deg" }] },
              "20%": { transform: [{ rotate: "-10deg" }] },
              "25%": { transform: [{ rotate: "10deg" }] },
              "35%": { transform: [{ rotate: "-7deg" }] },
              "40%": { transform: [{ rotate: "0deg" }] },
              "100%": { transform: [{ rotate: "0deg" }] },
            },
            animationDuration: "2.5s",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        >
          <EvilIcons name="star" size={16} color="#475569" />
        </Animated.View>
        <Text style={styles.popularText}>
          <Text style={styles.popularTextBold}>Popular</Text>! This item is
          trending now.
        </Text>
      </View>
      <ShoeDetails />
    </View>
  );
}

function SelectSizeButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={styles.selectSizeButton}>
        <Text style={styles.selectSizeButtonText}>Select Size</Text>
        <Animated.View
          style={{
            transitionDuration: 150,
            transitionTimingFunction: "ease-in",
            transitionProperty: "transform",
            transform: [{ translateX: pressed ? 6 : 0 }],
          }}
        >
          <Octicons name="arrow-right" size={24} color="white" />
        </Animated.View>
      </View>
      <Animated.View
        style={[
          styles.buttonBackground,
          {
            transitionDuration: 150,
            transitionTimingFunction: "ease-in",
            transitionProperty: "transform",
            transform: [
              { translateX: pressed ? 0 : 4 },
              { translateY: pressed ? -38 : -34 },
            ],
          },
        ]}
      />
    </Pressable>
  );
}

export function Tienda() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header />
      <ShoeGallery />
      <Details />
      <View style={[styles.sheet, { paddingBottom: insets.bottom }]}>
        <SelectSizeButton />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    marginHorizontal: 8,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Menlo",
    color: "#020617",
  },
  searchBarWrapper: {
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width,
    marginHorizontal: 8,
  },
  searchBar: {
    fontSize: 20,
    flexDirection: "row",
    alignItems: "center",
    color: "#d4d4d8",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#64748b",
    height: 50,
    flex: 1,
    paddingLeft: 4,
    gap: 10,
  },
  searchBarTextInput: {
    width: "100%",
    height: "100%",
  },
  button: {
    justifyContent: "center",
  },
  buttonText: {
    color: "#374151",
    fontWeight: "600",
  },
  content: {
    marginHorizontal: 8,
    gap: 4,
  },
  sheet: {
    height: 100,
    width: "100%",
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    paddingTop: 10,
    paddingHorizontal: 8,
  },
  selectSizeButton: {
    backgroundColor: "#0f172a",
    padding: 10,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonBackground: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#0f172a",
    height: 38,
    zIndex: -1,
  },
  selectSizeButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Menlo",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  popular: {
    backgroundColor: "#f1f5f9",
    flexDirection: "row",
    padding: 6,
    gap: 4,
    marginBottom: 12,
    alignItems: "center",
  },
  popularText: {
    fontSize: 14,
    color: "#374151",
  },
  popularTextBold: {
    fontWeight: 600,
  },
});
