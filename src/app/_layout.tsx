import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import "react-native-reanimated";

function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

export default gestureHandlerRootHOC(Layout);
