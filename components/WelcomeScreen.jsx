import { View, Text } from "react-native";

export function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "#EDEFEE",
          textAlign: "center",
          fontSize: 30,
          padding: 40,
        }}
      >
        Welcome to the app!
      </Text>
      <Text
        style={{
          color: "#EDEFEE",
          textAlign: "center",
          marginVertical: 8,
          fontSize: 24,
          padding: 20,
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
