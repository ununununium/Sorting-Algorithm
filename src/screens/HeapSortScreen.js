import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const HeapSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="heapSort" />
    </ScrollView>
  );
};

HeapSortScreen.navigationOptions = {
  title: "Heap Sort",
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

export default HeapSortScreen;
