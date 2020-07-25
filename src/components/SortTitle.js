import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import SortContent from "../components/SortContent";

import { MaterialCommunityIcons } from "@expo/vector-icons";

var WIDTH = Dimensions.get("window").width;

const SortTitle = ({ title }) => {
  const tabPos = useState(new Animated.Value(WIDTH / 3))[0];
  const [flag, setFlag] = useState([false, true, false]);
  function changeTabPos(v, index) {
    console.log("just cl");
    let ary = [false, false, false];
    ary[index] = ary[index] == true ? false : true;
    setFlag(ary);
    Animated.spring(tabPos, {
      toValue: v,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.speedTabBarContainer}>
        <Animated.View
          style={{ ...styles.speedTabHighLighter, left: tabPos }}
        />
        <TouchableOpacity onPress={() => changeTabPos(27, 0)}>
          <View style={[flag[0] ? styles.btnContainer : {}]}>
            <MaterialCommunityIcons
              name="speedometer-slow"
              size={40}
              color="white"
              style={styles.icon}
            />
            <Text style={[styles.buttonText, flag[0] ? {} : styles.hidden]}>
              Slow
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTabPos(WIDTH / 3 - 1, 1)}>
          <View style={[flag[1] ? styles.btnContainer : {}]}>
            <MaterialCommunityIcons
              name="speedometer-medium"
              size={40}
              color="white"
              style={styles.icon}
            />
            <Text style={[styles.buttonText, flag[1] ? {} : styles.hidden]}>
              Medium
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeTabPos((2 * WIDTH) / 3 - 29, 2)}>
          <View style={[flag[2] ? styles.btnContainer : {}]}>
            <MaterialCommunityIcons
              name="speedometer"
              size={40}
              color="white"
              style={styles.icon}
            />

            <Text style={[styles.buttonText, flag[2] ? {} : styles.hidden]}>
              Fast
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 5,
  },
  titleContainer: {
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 2,
  },
  numBar: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  speedTabBarContainer: {
    height: 70,
    backgroundColor: "#889BF2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: WIDTH / 3,
    // borderWidth: 2,
  },
  icon: {
    marginLeft: 5,
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
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center",
    // borderWidth: 2,
    flexDirection: "row",
    flex: 1,
  },
  hidden: {
    width: 0,
    height: 0,
  },
});

export default SortTitle;
