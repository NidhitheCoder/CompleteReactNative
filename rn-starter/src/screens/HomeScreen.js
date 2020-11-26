import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>my App </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To COmponents Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go To List Demo</Text>
        <Text>Another text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
