// import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerTitle} numberOfLines={1}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: { flex: 0.1, backgroundColor: "#F4CE14" },
  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#495E57",
    marginTop: 10,
  },
});
