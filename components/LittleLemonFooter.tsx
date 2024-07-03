import { View, Text, StyleSheet } from "react-native";

export function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerTitle}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    marginBottom: 10,
  },
  footerTitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

const orangeFooterStyles = StyleSheet.create({
  orangeContainer: {
    backgroundColor: "#F4CE14",
    marginBottom: 10,
  },
  orangeFooterTitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});
