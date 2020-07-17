import React, { useState } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NumBar = ({ state }) => {
	const bars = state.bars;
	const setBars = state.setBars;
	var c = 0;

	return (
		<View style={styles.frame}>
			<View style={styles.bars}>
				<FlatList
					horizontal
					data={bars}
					renderItem={({ item }) => {
						return (
							<View
								style={{
									borderRadius: 10,
									borderWidth: 1,
									borderColor: "white",
									width: (windowWidth - 40) / bars.length,
									height: item,
									backgroundColor: "black",
									flexDirection: "column",
									alignSelf: "flex-end",
								}}
							></View>
						);
					}}
				/>
			</View>
			<View style={styles.buttonView}>
				<TouchableOpacity
					onPress={() => {
						if (bars.length > 3) setBars(bars.slice(0, -1));
					}}
				>
					<AntDesign name="minussquare" size={50} color="black" />
				</TouchableOpacity>
				<View style={{ width: 100 }} />
				<TouchableOpacity
					onPress={() => {
						setBars([...bars, Math.floor(Math.random() * 90 + 10)]);
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
		alignItems: "center",
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
