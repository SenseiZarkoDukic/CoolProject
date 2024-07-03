import { View, Text, ScrollView, StyleSheet } from "react-native";

export function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={welcomeStylesSmall.container}>
      <Text style={welcomeStylesSmall.headerText}>Welcome to Little Lemon</Text>
      <Text style={welcomeStylesSmall.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 50,
    padding: 40,
  },
  text: {
    color: "#EDEFEE",
    textAlign: "center",
    marginVertical: 8,
    fontSize: 38,
    padding: 20,
  },
});

const welcomeStylesSmall = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
