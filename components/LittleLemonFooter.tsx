import { View, Text } from "react-native";

export function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          // padding: 10,
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
