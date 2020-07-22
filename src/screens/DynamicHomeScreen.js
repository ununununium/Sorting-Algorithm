import React, { useEffect, useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	Button,
} from "react-native";
import DynamicCell from "../components/DynamicCell";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const CELL_WIDTH = (HEIGHT - 190) / 4;

var sortAll = null;

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

	sortAll = () => {
		buttons.forEach((e) => e.sort());
	};

	return (
		<View>
			<ScrollView>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt1 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("BubbleSort")}
						color="#FFB756"
					/>
					<DynamicCell
						passdown={{ setter: setButt2 }}
						sortAlgo="Insertion Sort"
						callBack={() => navigation.navigate("InsertionSort")}
						color="#F7679A"
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt3 }}
						sortAlgo="Quick Sort"
						callBack={() => navigation.navigate("QuickSort")}
						color="#EC6642"
					/>
					<DynamicCell
						passdown={{ setter: setButt4 }}
						sortAlgo="Heap Sort"
						callBack={() => navigation.navigate("HeapSort")}
						color="#7364C7"
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt5 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("SelectionSort")}
						color="#51B8F2"
					/>
					<DynamicCell
						passdown={{ setter: setButt6 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("ShellSort")}
						color="#9B7F69"
					/>
				</View>
				<View style={styles.hbox}>
					<DynamicCell
						passdown={{ setter: setButt7 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("SlowSort")}
						color="#58DC88"
					/>
					<DynamicCell
						passdown={{ setter: setButt8 }}
						sortAlgo="Bubble Sort"
						callBack={() => navigation.navigate("CocktailShakerSort")}
						color="#C4234D"
					/>
				</View>
			</ScrollView>
		</View>
	);
};

DynamicHomeScreen.navigationOptions = {
	title: "",
	headerLeft: () => (
		<View style={styles.headerLeft}>
			<TouchableOpacity
				style={styles.titleButton}
				onPress={() => console.log("Title Clicked")}
			>
				<Text style={styles.titleButtonText}>Sort Algo</Text>
			</TouchableOpacity>
		</View>
	),
	headerRight: () => (
		<View style={styles.headerRight}>
			<View
				style={{
					width: CELL_WIDTH,
					flexDirection: "row",
					justifyContent: "space-around",
				}}
			>
				<TouchableOpacity
					style={styles.sortAllButton}
					onPress={() => console.log("Shuffle All")}
				>
					<Text style={styles.buttonText}>Shuffle</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.sortAllButton}
					onPress={() => sortAll()}
				>
					<Text style={styles.buttonText}>Sort</Text>
				</TouchableOpacity>
			</View>
		</View>
	),
	headerStyle: {
		backgroundColor: "#889BF2",
	},
};

const styles = StyleSheet.create({
	titleButton: {
		width: CELL_WIDTH,
		height: HEIGHT / 20,
		// backgroundColor: "#5C69A4",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	titleButtonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 26,
	},
	sortAllButton: {
		width: WIDTH / 6,
		height: HEIGHT / 30,
		backgroundColor: "#5C69A4",
		borderRadius: 10,
		marginRight: WIDTH / 15,
		marginLeft: WIDTH / 15,
		alignItems: "center",
		justifyContent: "center",
	},
	headerLeft: {
		width: WIDTH / 2,
		// borderWidth: 1,
		// borderColor: "black",
		flexDirection: "row",
		justifyContent: "space-around",
	},

	headerRight: {
		width: WIDTH / 2,
		// borderWidth: 1,
		// borderColor: "black",
		flexDirection: "row",
		justifyContent: "center",
	},

	buttonText: {
		color: "white",
		fontWeight: "bold",
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
