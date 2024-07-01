// import * as React from "react";
import { View, Text } from "react-native";

export function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          // padding: 10,
          fontSize: 30,

          textAlign: "center",
          fontWeight: "bold",
          color: "#495E57",
          marginTop: 10,
        }}
        numberOfLines={1}
      >
        Little Lemon
      </Text>
    </View>
  );
}
