import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
const SortTitle = ({ callBack, title }) => {
  const [flag, setFlag] = useState([false, true, false]);

  const handleSpeedBtn = (index) => {
    let ary = [false, false, false];
    ary[index] = ary[index] == true ? false : true;
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
          style={styles.buttonView}
          onPress={() => handleSpeedBtn(0)}>
          <View style={[flag[0] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Slow</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => handleSpeedBtn(1)}>
          <View style={[flag[1] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Normal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => handleSpeedBtn(2)}>
          <View style={[flag[2] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Fast</Text>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
    paddingHorizontal: 17,
    backgroundColor: "#f6f9ff",
    borderRadius: 40,
    paddingVertical: 8,
  },
  buttonView: {
    flex: 3.3,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: "#53588b",
    fontWeight: "bold",
  },
  buttonTextLayer: {
    width: 100,
    backgroundColor: "#e5eeff",
    borderRadius: 50,
  },
});

export default SortTitle;
