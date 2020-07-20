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

const windowWidth = Dimensions.get("window").width;

const DEFAULT_BARS = [
	{ val: "76", color: "black" },
	{ val: "36", color: "black" },
	{ val: "96", color: "black" },
];

const DynamicBar = () => {
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
									height: item,
									width: animWidth,
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
						SetAnimVal([...getAnimVal, new Animated.Value(newVal)]);
						changeBarWidth(barNum + 1);
					}}
				>
					<AntDesign name="plussquare" size={50} color="black" />
				</TouchableOpacity>
			</View>

			<Button
				title="Swap"
				onPress={() => {
					animSwap(0, 1);
				}}
			/>
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

export default DynamicBar;
