import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import DynamicBar from "../components/DynamicBar";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const CELL_WIDTH = (HEIGHT - 190) / 4;

const DynamicCell = ({ callBack, passdown, sortAlgo, color }) => {
  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: color }]}
      onPress={() => callBack()}>
      <View style={styles.bar}>
        <DynamicBar
          sortAlgo={sortAlgo}
          passdown={passdown}
          hideButton={true}
          screenWidth={CELL_WIDTH}
          screenHeight={CELL_WIDTH - 100}
          barBorderWidth={2.5}
          barBorderColor={color}
          barMargin={5}
          scene={"DynamicHome"}
          sleepSec={200}
        />
      </View>
      {/* <View style={styles.sep} /> */}
      <View style={styles.text}>
        <Text style={styles.title}>{sortAlgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: CELL_WIDTH,
    height: CELL_WIDTH,
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: "center",
  },
  bar: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 3,
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  sep: {
    height: 1,
    width: CELL_WIDTH * 0.1,
    backgroundColor: "white",
    borderRadius: 20,
  },
  text: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DynamicCell;
