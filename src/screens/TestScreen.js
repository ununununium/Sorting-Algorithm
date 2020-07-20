import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Button,
	Animated,
	FlatList,
	Text,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import DynamicBar from "../components/DynamicBar";

const windowWidth = Dimensions.get("window").width;

const DEFAULT_BARS = [
	{ val: "76", color: "black" },
	{ val: "36", color: "black" },
	{ val: "96", color: "black" },
];

const TestScreen = () => {
	const [bars, setBars] = useState(DEFAULT_BARS);

	const animWidth = useState(
		new Animated.Value((windowWidth - 40) / bars.length)
	)[0];

	function changeBarWidth(barNum) {
		Animated.timing(animWidth, {
			toValue: (windowWidth - 40) / barNum,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}

	const animVals = [];
	for (var i = 0; i < DEFAULT_BARS.length; i++) {
		animVals[i] = useState(new Animated.Value(parseInt(bars[i].val)))[0];
	}

	const [getAnimVal, SetAnimVal] = useState(animVals);

	function animSwap(a, b) {
		const a_val = getAnimVal[a]._value;
		const b_val = getAnimVal[b]._value;

		Animated.timing(getAnimVal[a], {
			toValue: b_val,
			duration: 300,
			useNativeDriver: false,
		}).start();

		Animated.timing(getAnimVal[b], {
			toValue: a_val,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}

	return (
		<View>
			<DynamicBar />
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
		borderWidth: 2,
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

export default TestScreen;
