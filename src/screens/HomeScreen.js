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
		<View>
			<ScrollView>
				<Text style={styles.title}> Algorithms</Text>
				<View style={styles.cellDiv}>
					<Cell
						title="Bubble Sort"
						callBack={() => navigation.navigate("BubbleSort")}
						color="#42c1f6"
					/>
					<Cell
						title="Insertion Sort"
						callBack={() => navigation.navigate("InsertionSort")}
						color="#5d12f7"
					/>
				</View>
				<View style={styles.cellDiv}>
					<Cell
						title="Quick Sort"
						callBack={() => navigation.navigate("QuickSort")}
						color="#db4179"
					/>
					<Cell
						title="Heap Sort"
						callBack={() => navigation.navigate("HeapSort")}
						color="#f17f5a"
					/>
				</View>
				<View style={styles.cellDiv}>
					<Cell
						title="Selection Sort"
						callBack={() => navigation.navigate("SelectionSort")}
						color="#f7c656"
					/>
					<Cell
						title="Shell Sort"
						callBack={() => navigation.navigate("ShellSort")}
						color="#95d269"
					/>
				</View>
				<View style={styles.cellDiv}>
					<Cell
						title="Slow Sort"
						callBack={() => navigation.navigate("SlowSort")}
						color="#7f5611"
					/>
					<Cell
						title="Cocktail shaker sort"
						callBack={() => navigation.navigate("CocktailShakerSort")}
						color="#1b4765"
					/>
				</View>

				<Cell
					title="Test"
					callBack={() => navigation.navigate("Test")}
					color="#1b4765"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	cellDiv: {
		flexDirection: "row",
		marginVertical: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
	},
});

export default HomeScreen;
