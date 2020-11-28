import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, SetBlue] = useState(0);
  const COLOR_INCREAMENT = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "Red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "Green":
        green + change > 255 || red + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "Blue":
        blue + change > 255 || blue + change < 0
          ? null
          : SetBlue(blue + change);
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("Red", COLOR_INCREAMENT)}
        onDecrease={() => setColor("Red", -1 * COLOR_INCREAMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("Green", COLOR_INCREAMENT)}
        onDecrease={() => setColor("Green", -1 * COLOR_INCREAMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("Blue", COLOR_INCREAMENT)}
        onDecrease={() => setColor("Blue", -1 * COLOR_INCREAMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
