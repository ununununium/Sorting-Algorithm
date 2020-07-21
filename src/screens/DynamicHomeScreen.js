import React, { useEffect, useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from "react-native";
import DynamicCell from "../components/DynamicCell";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const CELL_WIDTH = (HEIGHT - 190) / 4;

const DynamicHomeScreen = ({ navigation }) => {
	const [butt1, setButt1] = useState({});
	const [butt2, setButt2] = useState({});
	const [butt3, setButt3] = useState({});
	const [butt4, setButt4] = useState({});
	const [butt5, setButt5] = useState({});
	const [butt6, setButt6] = useState({});
	const [butt7, setButt7] = useState({});
	const [butt8, setButt8] = useState({});

	const buttons = [butt1, butt2, butt3, butt4, butt5, butt6, butt7, butt8];

	function startAll() {
		buttons.forEach((e) => e.sort());
	}

	return (
		<View>
			<TouchableOpacity style={styles.startButton} onPress={() => startAll()}>
				<Text style={styles.buttonText}>Start All</Text>
			</TouchableOpacity>
			<ScrollView>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt1 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("BubbleSort")}
					/>
					<DynamicCell
						passdown={{ setter: setButt2 }}
						sortAlgo="Insertion Sort"
						callBack={() => navigation.navigate("InsertionSort")}
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt3 }}
						sortAlgo="Quick Sort"
						callBack={() => navigation.navigate("QuickSort")}
					/>
					<DynamicCell
						passdown={{ setter: setButt4 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("HeapSort")}
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt5 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("SelectionSort")}
					/>
					<DynamicCell
						passdown={{ setter: setButt6 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("ShellSort")}
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt7 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("SlowSort")}
					/>
					<DynamicCell
						passdown={{ setter: setButt8 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("CocktailShakerSort")}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	startButton: {
		// width: WIDTH * 0.8,
		height: 30,
		backgroundColor: "black",
		borderRadius: 20,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "white",
	},
	hbox: {
		paddingTop: 12,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	box: {
		width: CELL_WIDTH,
		height: CELL_WIDTH,
		backgroundColor: "black",
		borderRadius: 20,
		alignItems: "center",
	},
	bar: {
		// borderWidth: 1,
		// borderColor: "white",
		flex: 2,
		justifyContent: "center",
	},
	sep: {
		height: 1,
		width: CELL_WIDTH * 0.1,
		backgroundColor: "white",
		borderRadius: 20,
	},
	text: {
		// borderWidth: 1,
		// borderColor: "white",
		flex: 1,
		justifyContent: "center",
	},

	title: {
		color: "white",
		// fontWeight: "bold",
		fontSize: 18,
	},
});

export default DynamicHomeScreen;
