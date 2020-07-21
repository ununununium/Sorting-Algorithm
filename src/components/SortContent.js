import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
const SortContent = ({ callBack, complexity, Description }) => {
  const [flag, setFlag] = useState([true, false, false]);
  const handleBtn = (index) => {
    let ary = [false, false, false];
    ary[index] = ary[index] == true ? false : true;
    setFlag(ary);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => handleBtn(0)}>
          <View style={[flag[0] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Complexity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => handleBtn(1)}>
          <View style={[flag[1] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Description</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => handleBtn(2)}>
          <View style={[flag[2] ? styles.buttonTextLayer : {}]}>
            <Text style={styles.buttonText}>Code</Text>
          </View>
        </TouchableOpacity>
      </View>
      {flag[0] && (
        <View style={styles.complexityContainer}>
          <View style={styles.infoContainer}>
            <Text>Worst case</Text>
            <Text style={styles.complexityText}>{complexity.worst}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>Average case</Text>
            <Text style={styles.complexityText}>{complexity.average}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>Best case</Text>
            <Text style={styles.complexityText}>{complexity.best}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text>Stable</Text>
            <Text style={styles.complexityText}>{complexity.stable}</Text>
          </View>
        </View>
      )}

      {flag[1] && (
        <View style={styles.descContainer}>
          <Text>{Description}</Text>
        </View>
      )}

      {flag[2] && (
        <View style={styles.codeContainer}>
          <Text>This is code block</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    paddingHorizontal: 17,
    backgroundColor: "#f6f9ff",
    borderRadius: 40,
    paddingVertical: 10,
    height: 200,
    justifyContent: "space-between",
  },
  buttonText: {
    textAlign: "center",
    padding: 12,
    color: "#53588b",
    fontWeight: "bold",
  },
  buttonTextLayer: {
    width: 100,
    backgroundColor: "#e5eeff",
    borderRadius: 50,
  },
  complexityContainer: {
    justifyContent: "space-between",
    flex: 7,
  },
  hidden: {
    width: 0,
    height: 0,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 10,
  },
  descContainer: {
    flexDirection: "row",
    flex: 7,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 20,
  },
  codeContainer: {
    flexDirection: "row",
    flex: 7,
    marginLeft: 10,
    marginRight: 20,
  },
});

export default SortContent;
