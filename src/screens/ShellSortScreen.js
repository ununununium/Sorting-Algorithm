import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const ShellSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="shellSort" />
    </ScrollView>
  );
};

ShellSortScreen.navigationOptions = {
  title: "Shell Sort",
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

export default ShellSortScreen;
