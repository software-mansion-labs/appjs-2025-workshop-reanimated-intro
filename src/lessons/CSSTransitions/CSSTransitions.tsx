import { Container } from "@/components/Container";
import Octicons from "@expo/vector-icons/Octicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

export function SelectSizeButton() {
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

export function CSSTransitionsLesson() {
  return (
    <Container>
      <View style={styles.container}>
        <SelectSizeButton />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  selectSizeButton: {
    backgroundColor: "#0f172a",
    padding: 10,
    paddingRight: 16,
    gap: 8,
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
});
