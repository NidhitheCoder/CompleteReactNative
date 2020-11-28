import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child Element #1</Text>
        <Text style={styles.textTwoStyle}>Child Element #2</Text>
        <Text style={styles.textThreeStyle}>Child Element #3</Text>
      </View>
      <View style={styles.ParentStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
      </View>
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
    height: 200,
    marginBottom: 30
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red"
    // alignSelf:"flex-start"
    // flex:4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "blue",
    // alignSelf:"center"
    // flex:1

    // position:'absolute',
    // top:0,
    // bottom:0,
    // left:0,
    // right:0,
    // for above 5 line we can write like this \/
    ...StyleSheet.absoluteFillObject,
    fontSize: 20
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red"
    // alignSelf:"flex-end"
    // flex:1
  },

  ParentStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height:200
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "cyan"
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    // marginTop:50,
    top:50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green"
  }
});

export default BoxScreen;
