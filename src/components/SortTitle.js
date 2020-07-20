import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
const SortTitle = ({ callBack, title }) => {
  const [flag, setFlag] = useState([false, true, false]);

  const handleSpeedBtn = (index) => {
    let ary = [false, false, false];
    ary[index] = ary[index] == true ? false : true;
    console.log("i jus press btn" + index);
    setFlag(ary);
    console.log(ary);
  };
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.buttonView,
            styles.buttonLeftRadius,
            flag[0] ? { backgroundColor: "#edab75" } : {},
          ]}
          onPress={() => handleSpeedBtn(0)}>
          <Text
            style={[styles.buttonText, flag[0] ? { color: "#ffffff" } : {}]}>
            Slow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonView,
            flag[1] ? { backgroundColor: "#edab75" } : {},
          ]}
          onPress={() => handleSpeedBtn(1)}>
          <Text
            style={[styles.buttonText, flag[1] ? { color: "#ffffff" } : {}]}>
            Normal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonView,
            styles.buttonRightRadius,
            flag[2] ? { backgroundColor: "#edab75" } : {},
          ]}
          onPress={() => handleSpeedBtn(2)}>
          <Text
            style={[styles.buttonText, flag[2] ? { color: "#ffffff" } : {}]}>
            Fast
          </Text>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    paddingHorizontal: 17,
  },
  buttonView: {
    borderWidth: 1,
    borderColor: "#edab75",
    flex: 3.3,
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 5,
    color: "#edab75",
    fontWeight: "bold",
  },
  buttonLeftRadius: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  buttonRightRadius: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export default SortTitle;
