import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListComponents = () => {
  const friends = [
    { name: "Smith", age: 22 },
    { name: "July", age: 34 },
    { name: "Sara", age: 45 },
    { name: "Starc", age: 23 },
    { name: "Elizabeth", age: 28 },
    { name: "Warner", age: 18 },
    { name: "Perry", age: 26 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //if funciton argument value is element then , element !== {item:{name:"friend#1,age:22"},index:0}
        // item === {name:"friends#1"}
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    paddingHorizontal: 5,
    paddingVertical: 40,
    backgroundColor: "purple",
    color:"white",
    borderColor: "green",
    borderWidth: 1
  }
});

export default ListComponents;
