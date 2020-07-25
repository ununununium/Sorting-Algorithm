import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const InsertionSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="insertionSort" />
    </ScrollView>
  );
};

InsertionSortScreen.navigationOptions = {
  title: "Insertion Sort",
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

export default InsertionSortScreen;
