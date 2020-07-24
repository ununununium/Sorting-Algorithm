import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import DynamicBar from "../components/DynamicBar";
import SortTitle from "../components/SortTitle";
import SortContent from "../components/SortContent";

const InsertionSortScreen = ({ navigation }) => {
	const complexity = {
		worst: "O(n^2)",
		average: "O(n^2)",
		best: "O(n)",
		stable: "Yes",
	};

	const desc =
		"Insertion sort is a simple algorithm that repeatedly chooses value from the list and inserts it into the already partialy sorted array.";
	return (
		<ScrollView style={styles.screen}>
			<SortTitle title="Insertion sort" />
			<DynamicBar sortAlgo="Insertion Sort" />
			<SortContent complexity={complexity} Description={desc} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "#ffffff",
	},
});

export default InsertionSortScreen;
