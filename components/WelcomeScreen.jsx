import { View, Text, ScrollView, StyleSheet } from "react-native";

export function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={welcomeStyles.container}>
      <Text style={welcomeStyles.whiteHeaderText}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyles.whiteText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1 },

  whiteHeaderText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 50,
    padding: 40,
  },
  whiteText: {
    color: "#EDEFEE",
    textAlign: "center",
    marginVertical: 8,
    fontSize: 38,
    padding: 20,
  },
});
