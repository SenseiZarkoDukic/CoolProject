import { View, Text } from "react-native";

export function WelcomeScreen() {
  return (
    <View>
      <Text style={{ color: "white", textAlign: "center", fontSize: "24" }}>
        Welcome to the app!
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
