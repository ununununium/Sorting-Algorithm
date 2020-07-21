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
	ScrollView,
} from "react-native";
import DynamicBar from "../components/DynamicBar";

const TestScreen = () => {
	const [butt1, setButt1] = useState({});
	const [butt2, setButt2] = useState({});
	const [butt3, setButt3] = useState({});

	const buttons = [butt1, butt2, butt3];
	return (
		<ScrollView>
			<DynamicBar
				passdown={{ setter: setButt1 }}
				hideButton={true}
				sortAlgo="Bubble Sort"
				screenWidth={200}
				screenHeight={100}
				barBorderWidth={3}
				barBorderColor="black"
			/>
			<DynamicBar
				passdown={{ setter: setButt2 }}
				hideButton={true}
				sortAlgo="Bubble Sort"
			/>
			<DynamicBar
				passdown={{ setter: setButt3 }}
				hideButton={true}
				sortAlgo="Bubble Sort"
			/>

			<Button
				title="click"
				onPress={() => {
					buttons.forEach((e) => e.sort());
				}}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

export default TestScreen;
