import React from "react";
import { StyleSheet, View } from "react-native";
import SortContent from "../components/SortContent";

const CocktailShakerSortScreen = () => {
  return (
    <View>
      <SortContent sortAlgo="cocktailShakerSort" />
    </View>
  );
};

// modify navigation title
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
