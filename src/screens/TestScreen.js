import React, { useState } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import NumBar from "../components/NumBar";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TestScreen = ({ navigation }) => {
	const [bars, setBars] = useState([]);

	return (
		<View>
			<NumBar />
		</View>
	);
};

const styles = StyleSheet.create({});

export default TestScreen;
