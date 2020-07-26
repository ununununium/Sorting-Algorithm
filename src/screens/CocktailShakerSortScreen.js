import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SortContent from "../components/SortContent";

const CocktailShakerSortScreen = () => {
  return (
    <ScrollView style={styles.background}>
      <SortContent sortAlgo="bublleSort" scene="SortContent" />
    </ScrollView>
  );
};

CocktailShakerSortScreen.navigationOptions = {
  title: "Cocktail Shaker Sort",
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

export default CocktailShakerSortScreen;
