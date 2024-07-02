import { View, Text, ScrollView } from "react-native";

export function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
      <Text
        style={{
          color: "#EDEFEE",
          textAlign: "center",
          fontSize: 50,
          padding: 40,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          color: "#EDEFEE",
          textAlign: "center",
          marginVertical: 8,
          fontSize: 38,
          padding: 20,
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}
