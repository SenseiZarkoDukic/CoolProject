// import * as React from "react";
import { View, Text } from "react-native";

export function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          padding: 30,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
        numberOfLines={3}
      >
        Welcome to
        <Text
          style={{ fontWeight: "bold", color: "#495E57" }}
          // numberOfLines={1}
        >
          {" "}
          Little Lemon
        </Text>
      </Text>
    </View>
  );
}
