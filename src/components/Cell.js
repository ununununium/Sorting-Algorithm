import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Cell = ({ title, callBack, color }) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.cell, { backgroundColor: color }]}
        onPress={() => callBack()}>
        <Text style={styles.cellText}>{title}</Text>
        <Ionicons name="ios-arrow-forward" style={styles.cellButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(233,233,233)",
    height: 160,
    width: 160,
    borderRadius: 20,
  },
  cellText: {
    fontSize: 18,
    color: "#fff",
  },
  cellButton: {
    fontSize: 24,
    color: "black",
  },
});

export default Cell;
