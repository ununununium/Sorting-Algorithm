import React, { useState } from "react";
import { StyleSheet, View, Button, Animated } from "react-native";

const DEFAULT_BARS = [
	{ val: "76", color: "black" },
	{ val: "36", color: "black" },
	{ val: "96", color: "black" },
];

const TestScreen = () => {
	const [bars, setBars] = useState(DEFAULT_BARS);
	const anim0 = useState(new Animated.Value(parseInt(bars[0].val)))[0];
	const anim1 = useState(new Animated.Value(parseInt(bars[1].val)))[0];
	const anim2 = useState(new Animated.Value(parseInt(bars[2].val)))[0];

	function animSwap() {
		console.log("swapping");
		const a_val = anim0._value;
		const b_val = anim1._value;

		Animated.timing(anim0, {
			toValue: b_val,
			duration: 300,
			useNativeDriver: false,
		}).start();

		Animated.timing(anim1, {
			toValue: a_val,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}

	return (
		<View>
			<View style={styles.barCollection}>
				<Animated.View
					style={{
						...styles.bar,
						height: anim0,
					}}
				/>
				<Animated.View
					style={{
						...styles.bar,
						height: anim1,
					}}
				/>
				<Animated.View
					style={{
						...styles.bar,
						height: anim2,
					}}
				/>
			</View>

			<Button
				title="Swap"
				onPress={() => {
					animSwap(anim0, anim1);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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
	},
});

export default TestScreen;
