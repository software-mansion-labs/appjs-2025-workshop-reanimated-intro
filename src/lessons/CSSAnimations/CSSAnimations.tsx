import { Container } from "@/components/Container";
import Icon from "@expo/vector-icons/EvilIcons";
import React from "react";
import { View } from "react-native";

export function Star({ size = 16 }) {
  return (
    <View>
      <Icon name="star" size={size} color="#475569" />
    </View>
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
