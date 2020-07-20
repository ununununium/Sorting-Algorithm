import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
const SortContent = ({ callBack, complexity, Description }) => {
  return (
    <View>
      <Text>Complexity</Text>
      <View>
        <View>
          <Text>Worst case</Text>
          <Text>{complexity.worst}</Text>
        </View>
        <View>
          <Text>Average case</Text>
          <Text>{complexity.average}</Text>
        </View>
        <View>
          <Text>Best case</Text>
          <Text>{complexity.best}</Text>
        </View>
        <View>
          <Text>Stable</Text>
          <Text>{complexity.stable}</Text>
        </View>
      </View>
      <Text>Description</Text>
      <Text>{Description}</Text>
    </View>
  );
};

// <View>
// <TouchableOpacity onPress={() => console.log("I just pressed shuffle")}>
//   <Text style={styles.cellText}>Shuffle</Text>
// </TouchableOpacity>
// <TouchableOpacity onPress={() => console.log("I just pressed sort")}>
//   <Text style={styles.cellText}>Sort</Text>
// </TouchableOpacity>
// </View>
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

export default SortContent;
