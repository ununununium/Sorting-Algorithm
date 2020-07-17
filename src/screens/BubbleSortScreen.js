import React, { useState } from "react";
import NumBar from "../components/NumBar";
import { StyleSheet, View, Button, Alert } from "react-native";

const DEFAULT_BARS = [
	48,
	67,
	78,
	38,
	98,
	29,
	49,
	80,
	63,
	90,
	24,
	65,
	77,
	92,
	24,
	30,
	85,
	26,
	51,
	33,
];

function swap(arr, first_Index, second_Index) {
	var temp = arr[first_Index];
	arr[first_Index] = arr[second_Index];
	arr[second_Index] = temp;
}

function bubbleSort(A, setArr) {
	var arr = [...A];
	var len = arr.length,
		i,
		j,
		stop;

	for (i = 0; i < len; i++) {
		for (j = 0, stop = len - i; j < stop; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				setArr(arr);
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
