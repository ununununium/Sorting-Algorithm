import React from "react";
import { StyleSheet, View } from "react-native";
import DynamicBar from "../components/DynamicBar";

const HeapSortScreen = () => {
	return (
		<View>
			<DynamicBar sortAlgo="Bubble Sort" />
		</View>
	);
};

const styles = StyleSheet.create({});

export default HeapSortScreen;
