import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SortTitle = ({ callBack, title }) => {
  const [flag, setFlag] = useState([false, true, false]);
  const opacity = useState(new Animated.Value(0))[0];
  const handleSpeedBtn = (index) => {
    let ary = [false, false, false];
    ary[index] = ary[index] == true ? false : true;
    setFlag(ary);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.btnGroupContainer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleSpeedBtn(0)}>
            <Animated.View
              style={[flag[0] ? styles.buttonTextLayer : {}, opacity]}>
              <MaterialCommunityIcons
                name="speedometer-slow"
                size={46}
                color="white"
                style={[flag[0] ? styles.icon : {}]}
              />
              <Text style={[styles.buttonText, flag[0] ? {} : styles.hidden]}>
                Slow
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleSpeedBtn(1)}>
            <Animated.View
              style={[flag[1] ? styles.buttonTextLayer : {}, opacity]}>
              <MaterialCommunityIcons
                name="speedometer-medium"
                size={46}
                color="white"
                style={[flag[1] ? styles.icon : {}]}
              />
              <Text style={[styles.buttonText, flag[1] ? {} : styles.hidden]}>
                Medium
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleSpeedBtn(2)}>
            <Animated.View
              style={[flag[2] ? styles.buttonTextLayer : {}, opacity]}>
              <MaterialCommunityIcons
                name="speedometer"
                size={46}
                color="white"
                style={[flag[2] ? styles.icon : {}]}
              />

              <Text style={[styles.buttonText, flag[2] ? {} : styles.hidden]}>
                Fast
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
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
  icon: {
    marginLeft: 10,
  },
  textDiv: {},

  btnGroupContainer: {
    height: 80,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#889bf2",
  },
  btnContainer: {
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center",
    flex: 1,
  },
  buttonTextLayer: {
    width: 130,
    backgroundColor: "#5c69a4",
    borderRadius: 50,
    flexDirection: "row",
  },
  hidden: {
    width: 0,
    height: 0,
  },
});

export default SortTitle;
