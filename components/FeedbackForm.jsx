import React, { useState } from "react";

import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

export function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <ScrollView style={feedbackStyles.container}>
      <Text style={feedbackStyles.headerText}>Feedback Form</Text>
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
        style={feedbackStyles.input}
        onChangeText={onChangeMessage}
        value={message}
        placeholder="Message"
        multiline={true}
      />
    </ScrollView>
  );
}

const feedbackStyles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontSize: 50,
    padding: 40,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F4CE14",
  },
});

export default FeedbackForm;
