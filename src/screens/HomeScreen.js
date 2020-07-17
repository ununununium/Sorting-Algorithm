import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Cell from "../components/Cell";

const HomeScreen = ({ navigation }) => {
	return (
		<ScrollView>
			<Cell
				title="Bubble Sort"
				callBack={() => navigation.navigate("BubbleSort")}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	cell: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingTop: 10,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "white",
	},
	cellText: {
		fontSize: 18,
	},
	cellButton: {
		fontSize: 24,
		color: "black",
	},

	text: {
		fontSize: 30,
		alignSelf: "center",
	},
});

export default HomeScreen;
