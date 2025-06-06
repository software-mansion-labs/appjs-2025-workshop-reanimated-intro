import { Container } from "@/components/Container";
import Icon from "@expo/vector-icons/Octicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function SelectSizeButton() {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View
        style={styles.selectSizeButton}
        onLayout={(e) => setLayout(e.nativeEvent.layout)}
      >
        <Text style={styles.selectSizeButtonText}>Select Size</Text>
        <View>
          <Icon name="arrow-right" size={24} color="white" />
        </View>
      </View>
      <View
        style={[
          styles.selectSizeButtonBackground,
          { width: layout.width, height: layout.height },
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
  selectSizeButtonBackground: {
    borderWidth: 1,
    borderColor: "#0f172a",
    zIndex: -1,
    position: "absolute",
    top: 5,
    left: 5,
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
