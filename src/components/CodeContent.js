import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Button,
	FlatList,
	Animated,
} from "react-native";

var WIDTH = Dimensions.get("window").width;

const CodeContent = ({ barPos, data }) => {
	// const barPos = useState(new Animated.Value(30))[0];

	return (
		<View style={styles.box}>
			{/* <Button
				title={"next"}
				onPress={() => changeBarPos(barPos, barPos._value + 30)}
			/> */}
			{/* <Text style={styles.algoText}>{algo} </Text> */}
			<View>
				<FlatList
					data={data}
					keyExtractor={(item, i) => "" + i}
					renderItem={(props) => {
						return props.index % 2 == 0 ? (
							<View style={styles.evenLine}>
								<Text style={styles.algoText}>{props.item}</Text>
							</View>
						) : (
							<View style={styles.oddsLine}>
								<Text style={styles.algoText}>{props.item}</Text>
							</View>
						);
					}}
				/>
				<Animated.View style={[styles.algoHighLighter, { top: barPos }]} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box: { alignItems: "center" },
	algoText: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		left: 20,
	},
	evenLine: {
		width: WIDTH,
		height: 30,
		backgroundColor: "#6D82E2",
		justifyContent: "center",
	},
	oddsLine: {
		width: WIDTH,
		height: 30,
		backgroundColor: "#889BF2",
		justifyContent: "center",
	},
	algoHighLighter: {
		top: 30,
		width: WIDTH - 5,
		height: 30,
		borderRadius: 8,
		backgroundColor: "#000000",
		opacity: 0.32,
		position: "absolute",
		alignSelf: "center",
	},
});

export default CodeContent;
