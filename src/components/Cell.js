import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Cell = ({ nav, title, callBack }) => {
	return (
		<TouchableOpacity style={styles.cell} onPress={() => callBack()}>
			<Text style={styles.cellText}>{title}</Text>
			<Ionicons name="ios-arrow-forward" style={styles.cellButton} />
		</TouchableOpacity>
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
		borderBottomColor: "rgb(233,233,233)",
	},
	cellText: {
		fontSize: 18,
	},
	cellButton: {
		fontSize: 24,
		color: "black",
	},
});

export default Cell;
