import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Animated,
	Dimensions,
} from "react-native";
import DynamicBar from "../components/DynamicBar";

import { MaterialCommunityIcons } from "@expo/vector-icons";

var WIDTH = Dimensions.get("window").width;

const BubbleSortScreen = () => {
	const tabPos = useState(new Animated.Value(20))[0];

	function changeTabPos(v) {
		Animated.spring(tabPos, {
			toValue: v,
			duration: 200,
			useNativeDriver: false,
		}).start();
	}

	return (
		<View>
			<View style={styles.numBar}>
				<DynamicBar sortAlgo="Bubble Sort" hideButton />
			</View>
			<View style={styles.speedTabBar}>
				<Animated.View
					style={{ ...styles.speedTabHighLighter, left: tabPos }}
				/>
				<TouchableOpacity onPress={() => changeTabPos(20)}>
					<MaterialCommunityIcons
						name="speedometer-slow"
						size={46}
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => changeTabPos(WIDTH / 3)}>
					<MaterialCommunityIcons
						name="speedometer-medium"
						size={46}
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => changeTabPos((2 * WIDTH) / 3 - 20)}>
					<MaterialCommunityIcons name="speedometer" size={46} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	numBar: {
		paddingTop: 30,
		paddingBottom: 30,
	},
	speedTabBar: {
		height: 70,
		backgroundColor: "#889BF2",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	speedTabHighLighter: {
		height: 50,
		width: WIDTH / 3,
		backgroundColor: "#000000",
		opacity: 0.32,
		borderRadius: 20,
		left: (2 * WIDTH) / 3 - 20,
		position: "absolute",
	},
});

export default BubbleSortScreen;
