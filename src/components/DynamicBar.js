import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	Animated,
	FlatList,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { bubbleSort } from "../Algorithms/SortAlgos";

const WIDTH = Dimensions.get("window").width;
const DEFAULT_BARS = [76, 44, 96, 55, 84, 66, 41, 52, 88, 77];
const SLEEP_SEC = 350; //recommend 150-300

const BORDER_COLOR_RANGE = ["rgb(255,255,255)", "rgb(0,255,255)"];
const BAR_COLOR_RANGE = ["rgba(216,224,255,1)", "rgba(87,117,255,1)"];

const DynamicBar = ({ sortAlgo }) => {
	//........................ Bar Width Animation ........................
	const animWidth = useState(
		new Animated.Value((WIDTH - 40) / DEFAULT_BARS.length)
	)[0];

	function changeBarWidth(barNum) {
		Animated.timing(animWidth, {
			toValue: (WIDTH - 40) / barNum,
			duration: SLEEP_SEC,
			useNativeDriver: false,
		}).start();
	}

	//........................ Bar Value init ........................
	const animVals = [];
	for (var i = 0; i < DEFAULT_BARS.length; i++) animVals[i] = {};

	for (var i = 0; i < DEFAULT_BARS.length; i++) {
		animVals[i].val = useState(new Animated.Value(DEFAULT_BARS[i]))[0];
	}

	for (var i = 0; i < DEFAULT_BARS.length; i++) {
		animVals[i].colorInterp = animVals[i].val.interpolate({
			inputRange: [30, 100],
			outputRange: BAR_COLOR_RANGE,
		});
	}

	for (var i = 0; i < DEFAULT_BARS.length; i++) {
		animVals[i].borderColorRaw = useState(new Animated.Value(0))[0];
		animVals[i].borderColorInterp = animVals[i].borderColorRaw.interpolate({
			inputRange: [0, 1],
			outputRange: BORDER_COLOR_RANGE,
		});
	}

	//........................ animVals Getter and Setter ........................
	const [getAnimVal, SetAnimVal] = useState(animVals);
	//........................ Bar Swap Animation ........................
	function animSwap(a, b) {
		const a_val = getAnimVal[a].val._value;
		const b_val = getAnimVal[b].val._value;

		Animated.timing(getAnimVal[a].val, {
			toValue: b_val,
			duration: SLEEP_SEC - 50,
			useNativeDriver: false,
		}).start();

		Animated.timing(getAnimVal[b].val, {
			toValue: a_val,
			duration: SLEEP_SEC - 50,
			useNativeDriver: false,
		}).start();
	}
	//........................ Bar Visit Animation ........................

	function visit(idx) {
		Animated.timing(getAnimVal[idx].borderColorRaw, {
			toValue: 1,
			duration: SLEEP_SEC - 50,
			useNativeDriver: false,
		}).start();
	}

	function unvisit(idx) {
		Animated.timing(getAnimVal[idx].borderColorRaw, {
			toValue: 0,
			duration: SLEEP_SEC - 50,
			useNativeDriver: false,
		}).start();
	}
	//........................ Sort ........................

	function sort() {
		switch (sortAlgo) {
			case "bubbleSort":
				bubbleSort(animSwap, getAnimVal, visit, unvisit, SLEEP_SEC);
		}
	}

	//........................ Dynamic Bar Render ........................
	return (
		<View style={styles.frame}>
			<View style={styles.barCollection}>
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					keyExtractor={(item, i) => "" + i}
					data={getAnimVal}
					renderItem={({ item }) => {
						console.log(item);
						return (
							<Animated.View
								style={{
									...styles.bar,
									height: item.val,
									width: animWidth,
									backgroundColor: item.colorInterp,
									borderColor: item.borderColorInterp,
								}}
							></Animated.View>
						);
					}}
				/>
			</View>

			<View style={styles.buttonView}>
				<TouchableOpacity
					onPress={() => {
						if (getAnimVal.length > 3) {
							let barNum = getAnimVal.length;
							SetAnimVal(getAnimVal.slice(0, -1));
							changeBarWidth(barNum - 1);
						}
					}}
				>
					<AntDesign name="minussquare" size={50} color="black" />
				</TouchableOpacity>
				<View style={{ width: 100 }} />
				<TouchableOpacity
					onPress={() => {
						let barNum = getAnimVal.length;
						let newVal = Math.floor(Math.random() * 70 + 30);
						let val = new Animated.Value(newVal);

						let colorInterp = val.interpolate({
							inputRange: [30, 100],
							outputRange: BAR_COLOR_RANGE,
						});

						let borderColorRaw = new Animated.Value(0);
						let borderColorInterp = borderColorRaw.interpolate({
							inputRange: [0, 1],
							outputRange: BORDER_COLOR_RANGE,
						});

						let newEle = {
							val,
							colorInterp,
							borderColorRaw,
							borderColorInterp,
						};
						SetAnimVal([...getAnimVal, newEle]);
						changeBarWidth(barNum + 1);
					}}
				>
					<AntDesign name="plussquare" size={50} color="black" />
				</TouchableOpacity>
			</View>

			<Button title="Sort It !!!" onPress={() => sort()} />
		</View>
	);
};

const styles = StyleSheet.create({
	frame: {
		padding: 20,
	},
	barCollection: {
		height: 120,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-end",
	},
	bar: {
		height: 300,
		width: 40,
		borderRadius: 50,
		borderColor: "white",
		borderWidth: 5,
		backgroundColor: "black",
		alignSelf: "flex-end",

		alignItems: "center",
		justifyContent: "flex-end",
	},
	barText: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
	},
	buttonView: {
		padding: 20,
		flexDirection: "row",
		alignSelf: "center",
	},
});

export default DynamicBar;
