import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Animated,
	Dimensions,
	Text,
} from "react-native";

var WIDTH = Dimensions.get("window").width;
const BUTTON_NUM = 3;

const AnimatedTabBar = ({ buttonTitles, icon, action }) => {
	const [fstButTitle, secButTitle, trdButTitle] = buttonTitles;
	const tabPos = useState(new Animated.Value(20))[0];
	const {
		FstIcon,
		SecIcon,
		TrdIcon,
		fstIconName,
		secIconName,
		trdIconName,
	} = icon;

	const { fstAction, secAction, trdAction } = action;

	const slowButtonPos = useState(new Animated.Value(20 + 10))[0];
	const mediumButtonPos = useState(
		new Animated.Value(WIDTH / 3 + WIDTH / 3 / 2 - 21)
	)[0];
	const fastButtonPos = useState(
		new Animated.Value((2 * WIDTH) / 3 + WIDTH / 6 - 42)
	)[0];

	const slowButtonOpa = useState(new Animated.Value(1))[0];
	const mediumButtonOpa = useState(new Animated.Value(0))[0];
	const fastButtonOpa = useState(new Animated.Value(0))[0];

	function changeTabPos(payload) {
		var toTabPos;

		switch (payload) {
			case 1:
				//do action
				fstAction();
				// chaneg sliding tab position
				toTabPos = 20;

				//change button position
				Animated.spring(slowButtonPos, {
					toValue: toTabPos + 10,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonPos, {
					toValue: WIDTH / 3 + WIDTH / 3 / 2 - 21,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonPos, {
					toValue: (2 * WIDTH) / 3 + WIDTH / 3 / 2 - 42,
					duration: 200,
					useNativeDriver: false,
				}).start();

				// change text opacity
				Animated.spring(slowButtonOpa, {
					toValue: 1,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				break;
			case 2:
				secAction();
				toTabPos = WIDTH / 3;

				Animated.spring(slowButtonPos, {
					toValue: WIDTH / 3 / 2,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonPos, {
					toValue: toTabPos + 10,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonPos, {
					toValue: (2 * WIDTH) / 3 + WIDTH / 3 / 2 - 42,
					duration: 200,
					useNativeDriver: false,
				}).start();

				// change text opacity
				Animated.spring(slowButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonOpa, {
					toValue: 1,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				break;
			case 3:
				trdAction();
				toTabPos = (2 * WIDTH) / 3 - 20;

				Animated.spring(slowButtonPos, {
					toValue: WIDTH / 3 / 2,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonPos, {
					toValue: WIDTH / 3 + WIDTH / 3 / 2 - 21,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonPos, {
					toValue: toTabPos + 10,
					duration: 200,
					useNativeDriver: false,
				}).start();

				// change text opacity
				Animated.spring(slowButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(mediumButtonOpa, {
					toValue: 0,
					duration: 200,
					useNativeDriver: false,
				}).start();

				Animated.spring(fastButtonOpa, {
					toValue: 1,
					duration: 200,
					useNativeDriver: false,
				}).start();
				break;
		}

		Animated.spring(tabPos, {
			toValue: toTabPos,
			duration: 200,
			useNativeDriver: false,
		}).start();
	}

	return (
		<View>
			<View style={styles.speedTabBar}>
				<Animated.View
					style={{ ...styles.speedTabHighLighter, left: tabPos }}
				/>
				<Animated.View style={{ ...styles.speedButton, left: slowButtonPos }}>
					<TouchableOpacity onPress={() => changeTabPos(1)}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<FstIcon name={fstIconName} size={38} color="white" />
							<Animated.View style={{ opacity: slowButtonOpa }}>
								<Text style={styles.speedButtonText}>{fstButTitle}</Text>
							</Animated.View>
						</View>
					</TouchableOpacity>
				</Animated.View>
				<Animated.View style={{ ...styles.speedButton, left: mediumButtonPos }}>
					<TouchableOpacity onPress={() => changeTabPos(2)}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<SecIcon name={secIconName} size={38} color="white" />
							<Animated.View style={{ opacity: mediumButtonOpa }}>
								<Text style={styles.speedButtonText}>{secButTitle}</Text>
							</Animated.View>
						</View>
					</TouchableOpacity>
				</Animated.View>
				<Animated.View style={{ ...styles.speedButton, left: fastButtonPos }}>
					<TouchableOpacity onPress={() => changeTabPos(3)}>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<TrdIcon name={trdIconName} size={38} color="white" />
							<Animated.View style={{ opacity: fastButtonOpa }}>
								<Text style={styles.speedButtonText}>{trdButTitle}</Text>
							</Animated.View>
						</View>
					</TouchableOpacity>
				</Animated.View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	speedTabBar: {
		height: 70,
		backgroundColor: "#889BF2",
		flexDirection: "row",
		alignItems: "center",
	},
	speedTabHighLighter: {
		height: 50,
		width: WIDTH / BUTTON_NUM,
		backgroundColor: "#000000",
		opacity: 0.32,
		borderRadius: 20,
		left: (2 * WIDTH) / BUTTON_NUM - 20,
		position: "absolute",
	},
	speedButton: {
		// borderWidth: 1,
		// borderColor: "black",
		position: "absolute",
	},
	speedButtonText: {
		fontSize: 18,
		// fontFamily: "Gill Sans",
		color: "white",
		left: 8,
	},
});

export default AnimatedTabBar;
