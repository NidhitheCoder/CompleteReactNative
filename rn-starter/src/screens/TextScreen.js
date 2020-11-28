import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, SetPassword] = useState("");
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text style={styles.element}>Hii Welcome {name}</Text>

      <Text>Enter Password :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => SetPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 charactors</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 25,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4
  },
  element:{
      margin:25
  }
});

export default TextScreen;
