import React from "react";
import { StyleSheet, View } from "react-native";
import DynamicBar from "../components/DynamicBar";

const QuickSortScreen = () => {
  return (
    <View>
      <DynamicBar sortAlgo="bubbleSort" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuickSortScreen;
