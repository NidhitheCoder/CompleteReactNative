import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greetings = "Nidheesh";
  const arrayItems = ["heyy", 123];
  const jsObj = { color: "red" };
  const txtElement = <Text>This is a text element saved as a variable</Text>;
  // <Text>{jsObj}</Text> this will getting error

  return (
    <View>
      <Text style={styles.textStyle}> components screen.</Text>
      <Text style={styles.subHeaderStyle}>Hi there.. Its me {greetings}</Text>
      <Text>{arrayItems}</Text>
      {txtElement}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    color: "green"
  },
  subHeaderStyle: {
    fontSize: 20,
    color: "purple",
    textAlign: "center"
  },
  Text: {
    textAlign: "center"
  }
});

export default ComponentsScreen;
