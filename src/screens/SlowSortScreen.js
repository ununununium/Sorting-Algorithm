import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const SlowSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="slowSort" />
    </ScrollView>
  );
};

SlowSortScreen.navigationOptions = {
  title: "Slow Sort",
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

export default SlowSortScreen;
