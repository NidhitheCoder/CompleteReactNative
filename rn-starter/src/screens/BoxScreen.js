import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child Element #1</Text>
      <Text style={styles.textTwoStyle}>Child Element #2</Text>
      <Text style={styles.textThreeStyle}>Child Element #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems:'center',
    // flexDirection:"row",
    // justifyContent: "space-around",
    height: 200
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf:"flex-start"
    // flex:4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf:"center"
    // flex:1
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf:"flex-end"
    // flex:1
  }
});

export default BoxScreen;
