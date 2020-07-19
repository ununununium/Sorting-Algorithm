import React, { useState, useRef, useEffect } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import {
	StyleSheet,
	View,
	TouchableOpacity,
	FlatList,
	Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NumBar = ({ state }) => {
	const { bars, setBars } = state;
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

	return (
		<View style={styles.frame}>
			<View style={styles.bars}>
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					keyExtractor={(item, i) => "" + i}
					data={bars}
					renderItem={({ item }) => {
						const { val, color } = item;

						return (
							<Animated.View
								style={{
									borderRadius: 100,
									borderWidth: 2,
									borderColor: "white",
									width: animWidth,
									height: parseInt(val),
									backgroundColor: color,
									flexDirection: "column",
									alignSelf: "flex-end",
								}}
							></Animated.View>
						);
					}}
				/>
			</View>
			<View style={styles.buttonView}>
				<TouchableOpacity
					onPress={() => {
						if (bars.length > 3) {
							let barNum = bars.length;
							setBars(bars.slice(0, -1));
							changeBarWidth(barNum - 1);
						}
					}}
				>
					<AntDesign name="minussquare" size={50} color="black" />
				</TouchableOpacity>
				<View style={{ width: 100 }} />
				<TouchableOpacity
					onPress={() => {
						let barNum = bars.length;
						setBars([
							...bars,
							{ val: Math.floor(Math.random() * 90 + 10), color: "black" },
						]);
						changeBarWidth(barNum + 1);
					}}
				>
					<AntDesign name="plussquare" size={50} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	bars: {
		alignItems: "flex-start",
		height: 110,
	},
	frame: {
		padding: 20,
	},
	buttonView: {
		padding: 20,
		flexDirection: "row",
		alignSelf: "center",
	},
});

export default NumBar;
