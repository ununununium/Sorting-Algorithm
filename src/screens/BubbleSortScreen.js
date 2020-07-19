import React, { useState } from "react";
import NumBar from "../components/NumBar";
import { StyleSheet, View, Button, Animated } from "react-native";

// const DEFAULT_BARS = [
// 	48,
// 	67,
// 	78,
// 	38,
// 	98,
// 	29,
// 	49,
// 	80,
// 	63,
// 	90,
// 	24,
// 	65,
// 	77,
// 	92,
// 	24,
// 	30,
// 	85,
// 	26,
// 	51,
// 	33,
// ];

const DEFAULT_BARS = [
	{ val: "46", color: "black" },
	{ val: "36", color: "black" },
	{ val: "96", color: "black" },
];

const sleep = (milliseconds) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

async function bubbleSort(A, setArr) {
	function swap(arr, first_Index, second_Index) {
		var temp = arr[first_Index];
		arr[first_Index] = arr[second_Index];
		arr[second_Index] = temp;
	}

	var arr = [...A];
	var n = arr.length;

	for (var i = 0; i < n - 1; i++) {
		for (var j = 0; j < n - i - 1; j++) {
			if (parseInt(arr[j].val) > parseInt(arr[j + 1].val)) {
				swap(arr, j, j + 1);
				setArr(arr);
				await sleep(300);
			}
		}
	}
}

const BubbleSortScreen = () => {
	const [bars, setBars] = useState(DEFAULT_BARS);

	return (
		<View>
			<NumBar state={{ bars, setBars }} />
			<Button title="Sort It" onPress={() => bubbleSort(bars, setBars)} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default BubbleSortScreen;
