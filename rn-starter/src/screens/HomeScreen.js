import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>my App </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Images List"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Demo"
      />
      <Button
        onPress={() => navigation.navigate("SquareState")}
        title=" Go To Square Demo With State"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Object Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
