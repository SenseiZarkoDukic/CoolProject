import { View, Text, ScrollView, StyleSheet } from "react-native";

export function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={welcomeStyles.container}>
      <Text style={welcomeStyles.whiteHeaderTextSmall}>
        Welcome to Little Lemon
      </Text>
      <Text style={welcomeStyles.whiteTextSmall}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1 },

  whiteHeaderTextBig: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 50,
    padding: 40,
  },
  whiteHeaderTextSmall: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  whiteTextBig: {
    color: "#EDEFEE",
    textAlign: "center",
    marginVertical: 8,
    fontSize: 38,
    padding: 20,
  },
  whiteTextSmall: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
