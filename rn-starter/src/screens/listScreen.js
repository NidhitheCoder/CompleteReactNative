import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListComponents = () => {
  const friends = [
    { name: "Smith" },
    { name: "July" },
    { name: "Sara" },
    { name: "Starc" },
    { name: "Elizabeth" },
    { name: "Warner" },
    { name: "Perry" }
  ];

  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor = {friend=>friend.name}
      data={friends}
      renderItem={({ item }) => {
        //if funciton argument value is element then , element !== {item:{name:"friend#1"},index:0}
        // item === {name:"friends#1"}
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50,
        marginHorizontal:20
    }
});

export default ListComponents;
