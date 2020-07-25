import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const SelectionSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="selectionSort" />
    </ScrollView>
  );
};

SelectionSortScreen.navigationOptions = {
  title: "Selection Sort",
  headerStyle: {
    backgroundColor: "#889BF2",
  },
  headerTitleStyle: {
    color: "white",
  },
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#E2E6FA",
  },
});

export default SelectionSortScreen;
