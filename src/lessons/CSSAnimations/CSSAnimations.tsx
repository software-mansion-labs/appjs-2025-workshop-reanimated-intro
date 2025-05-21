import { Container } from "@/components/Container";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

export function Star({ size = 16 }) {
  return (
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
      <EvilIcons name="star" size={size} color="#475569" />
    </Animated.View>
  );
}

export function CSSAnimationsLesson() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Star size={64} />
      </View>
    </Container>
  );
}
