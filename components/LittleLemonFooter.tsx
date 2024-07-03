import { View, Text, StyleSheet } from "react-native";

export function LittleLemonFooter() {
  return (
    <View style={orangeFooterStyles.container}>
      <Text style={orangeFooterStyles.footerTitle}>
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
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 20,
  },
  footerTitle: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
});
