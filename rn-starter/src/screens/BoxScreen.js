import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Inside Box</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black"
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    margin: 20
  }
});

export default BoxScreen;