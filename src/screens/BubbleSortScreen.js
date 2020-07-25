import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import DynamicBar from "../components/DynamicBar";
import CodeContent from "../components/CodeContent";

var WIDTH = Dimensions.get("window").width;
const BUTTON_NUM = 3;

const BubbleSortScreen = () => {
	return (
		<View style={styles.background}>
			<DynamicBar sortAlgo="Bubble Sort" />
			{/* <CodeContent /> */}
		</View>
	);
};

BubbleSortScreen.navigationOptions = {
	title: "Bubble Sort",
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

export default BubbleSortScreen;
