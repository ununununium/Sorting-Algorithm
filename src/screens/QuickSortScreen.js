import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const QuickSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="quickSort" />
    </ScrollView>
  );
};

QuickSortScreen.navigationOptions = {
  title: "Quick Sort",
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

export default QuickSortScreen;
