import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      styles={feedbackStyles.container}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={feedbackStyles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={feedbackStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={feedbackStyles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          style={feedbackStyles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={feedbackStyles.messageInput}
          onChangeText={onChangeMessage}
          value={message}
          placeholder="Message"
          multiline={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const feedbackStyles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "black",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "black",
  },
});

export default FeedbackForm;
