// import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export function LittleLemonHeader() {
  return (
    <View style={orangeHeaderStyles.container}>
      <Text style={orangeHeaderStyles.headerTitle} numberOfLines={1}>
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
const orangeHeaderStyles = StyleSheet.create({
  container: { flex: 0.1, backgroundColor: "#EE9972", padding: 10 },
  headerTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
});
