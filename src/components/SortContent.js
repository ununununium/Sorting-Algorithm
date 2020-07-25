import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  knuthShuffle,
  bubbleSort,
  insertionSort,
  quickSort,
  heapSort,
  codeData,
  sortInfo,
} from "../Algorithms/SortAlgos";
import AnimatedTabBar from "./AnimatedTabBar";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CodeContent from "./CodeContent";

var WIDTH = Dimensions.get("window").width;
var HEIGHT = 100;
var HEIGHT_RANGE = [HEIGHT * 0.3, HEIGHT];

var BORDER_WIDTH = 5;
var BAR_MARGIN = 5;

var DEFAULT_BARS = [77, 44, 99, 55, 88, 66, 33];
// var SLEEP_SEC = 350;

var BORDER_COLOR_RANGE = ["rgba(227,168,255,0)", "rgba(227,168,255,1)"];
const BAR_COLOR_RANGE = ["rgba(216,224,255,1)", "rgba(87,117,255,1)"];

const SortContent = ({ sortAlgo }) => {
  WIDTH = Dimensions.get("window").width;
  HEIGHT = 100;
  HEIGHT_RANGE = [HEIGHT * 0.3, HEIGHT];
  BORDER_WIDTH = 5;
  BAR_MARGIN = 5;
  DEFAULT_BARS = [77, 44, 99, 55, 88, 66, 33];

  const [SLEEP_SEC, setSleepSec] = useState(1000);
  const [flag, setFlag] = useState([true, false, false]);

  //........................ Bar Width Animation ........................
  const animWidth = useState(
    new Animated.Value(
      (WIDTH - DEFAULT_BARS.length * BAR_MARGIN - 40) / DEFAULT_BARS.length
    )
  )[0];

  function changeBarWidth(barNum) {
    Animated.timing(animWidth, {
      toValue: (WIDTH - barNum * BAR_MARGIN - 40) / barNum,
      duration: SLEEP_SEC,
      useNativeDriver: false,
    }).start();
  }

  //........................ Bar Value init ........................
  const animVals = [];
  for (var i = 0; i < DEFAULT_BARS.length; i++) animVals[i] = {};

  for (var i = 0; i < DEFAULT_BARS.length; i++) {
    animVals[i].val = useState(new Animated.Value(DEFAULT_BARS[i]))[0];
    animVals[i].heightInterp = animVals[i].val.interpolate({
      inputRange: [30, 100],
      outputRange: HEIGHT_RANGE,
    });
  }

  for (var i = 0; i < DEFAULT_BARS.length; i++) {
    animVals[i].colorInterp = animVals[i].val.interpolate({
      inputRange: [30, 100],
      outputRange: BAR_COLOR_RANGE,
    });
  }

  for (var i = 0; i < DEFAULT_BARS.length; i++) {
    animVals[i].borderColorRaw = useState(new Animated.Value(0))[0];
    animVals[i].borderColorInterp = animVals[i].borderColorRaw.interpolate({
      inputRange: [0, 1],
      outputRange: BORDER_COLOR_RANGE,
    });
  }

  //........................ animVals Getter and Setter ........................
  const [getAnimVal, SetAnimVal] = useState(animVals);
  //........................ Bar Swap Animation ........................
  function animSetValue(index, value) {
    Animated.timing(getAnimVal[index].val, {
      toValue: value,
      duration: SLEEP_SEC - 50,
      useNativeDriver: false,
    }).start();
  }

  //........................ Bar Swap Animation ........................
  function animSwap(a, b) {
    const a_val = getAnimVal[a].val._value;
    const b_val = getAnimVal[b].val._value;

    Animated.timing(getAnimVal[a].val, {
      toValue: b_val,
      duration: SLEEP_SEC - 50,
      useNativeDriver: false,
    }).start();

    Animated.timing(getAnimVal[b].val, {
      toValue: a_val,
      duration: SLEEP_SEC - 50,
      useNativeDriver: false,
    }).start();
  }
  //........................ Bar Visit Animation ........................

  function visit(idx) {
    Animated.timing(getAnimVal[idx].borderColorRaw, {
      toValue: 1,
      duration: SLEEP_SEC / 2,
      useNativeDriver: false,
    }).start();
  }

  function unvisit(idx) {
    Animated.timing(getAnimVal[idx].borderColorRaw, {
      toValue: 0,
      duration: SLEEP_SEC / 2,
      useNativeDriver: false,
    }).start();
  }
  //........................ Code Content Bar init....................
  const barPos = useState(new Animated.Value(0))[0];
  //........................ helper functions ........................

  function sort() {
    switch (sortAlgo) {
      case "bublleSort":
        bubbleSort(
          animSwap,
          getAnimVal,
          visit,
          unvisit,
          SLEEP_SEC,
          changeBarPos
        );
        break;
      case "insertionSort":
        insertionSort(animSetValue, getAnimVal, visit, unvisit, SLEEP_SEC);
        break;
      case "quickSort":
        quickSort(
          getAnimVal,
          0,
          getAnimVal.length - 1,
          animSwap,
          visit,
          unvisit,
          SLEEP_SEC
        );
        break;
      case "heapSort":
        console.log("click heap");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "selectionSort":
        console.log("click selection");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "shellSort":
        console.log("click shell");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "slowSort":
        console.log("click slow");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "cocktailShakerSort":
        console.log("click Shaker");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
    }
  }

  function shuffle() {
    knuthShuffle(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
  }

  function addBar() {
    let barNum = getAnimVal.length;
    let newVal = Math.floor(Math.random() * 70 + 30);
    let val = new Animated.Value(newVal);

    let colorInterp = val.interpolate({
      inputRange: [30, 100],
      outputRange: BAR_COLOR_RANGE,
    });

    let borderColorRaw = new Animated.Value(0);
    let borderColorInterp = borderColorRaw.interpolate({
      inputRange: [0, 1],
      outputRange: BORDER_COLOR_RANGE,
    });

    let heightInterp = val.interpolate({
      inputRange: [30, 100],
      outputRange: HEIGHT_RANGE,
    });

    let newEle = {
      val,
      colorInterp,
      borderColorRaw,
      borderColorInterp,
      heightInterp,
    };
    SetAnimVal([...getAnimVal, newEle]);
    changeBarWidth(barNum + 1);
  }

  function removeBar() {
    if (getAnimVal.length > 3) {
      let barNum = getAnimVal.length;
      SetAnimVal(getAnimVal.slice(0, -1));
      changeBarWidth(barNum - 1);
    }
  }

  function changeBarPos(toValue) {
    console.log(toValue);
    Animated.timing(barPos, {
      toValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  //........................ Dynamic Bar Render ........................
  return (
    <View style={styles.frame}>
      <View style={{ height: 40 }} />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            ...styles.barCollection,
            height: HEIGHT + 10,
            width: WIDTH - 40 - BAR_MARGIN,
          }}>
          <FlatList
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={(item, i) => "" + i}
            data={getAnimVal}
            renderItem={({ item }) => {
              return (
                <Animated.View
                  style={{
                    ...styles.bar,
                    height: item.heightInterp,
                    width: animWidth,
                    backgroundColor: item.colorInterp,
                    borderColor: item.borderColorInterp,
                    borderWidth: BORDER_WIDTH,
                    marginRight: BAR_MARGIN,
                  }}></Animated.View>
              );
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ height: 30 }} />
        <AnimatedTabBar
          buttonTitles={["Slow", "Medium", "Fast"]}
          icon={{
            FstIcon: MaterialCommunityIcons,
            SecIcon: MaterialCommunityIcons,
            TrdIcon: MaterialCommunityIcons,
            fstIconName: "speedometer-slow",
            secIconName: "speedometer-medium",
            trdIconName: "speedometer",
          }}
          action={{
            fstAction: () => {
              setSleepSec(1000);
            },
            secAction: () => {
              setSleepSec(500);
            },
            trdAction: () => {
              setSleepSec(200);
            },
          }}
        />
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.button} onPress={addBar}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={removeBar}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={shuffle}>
            <Text style={styles.buttonText}>Shuffle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={sort}>
            <Text style={styles.buttonText}>Sort</Text>
          </TouchableOpacity>
        </View>

        <AnimatedTabBar
          buttonTitles={["Cplx.", "Desc.", "Code"]}
          icon={{
            FstIcon: Ionicons,
            SecIcon: MaterialCommunityIcons,
            TrdIcon: FontAwesome,
            fstIconName: "ios-speedometer",
            secIconName: "file-document-box-outline",
            trdIconName: "file-code-o",
          }}
          action={{
            fstAction: () => {
              console.log("show complexity");
              setFlag([true, false, false]);
              console.log(flag);
            },
            secAction: () => {
              console.log("show description");
              setFlag([false, true, false]);
              console.log(flag);
            },
            trdAction: () => {
              console.log("show code");
              setFlag([false, false, true]);
              console.log(flag);
            },
          }}
        />

        {flag[0] ? (
          <View style={styles.complexityContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.complexityText}>Worst case</Text>
              <Text style={styles.complexityText}>
                {sortInfo[`${sortAlgo}`]["complexity"]["worst"]}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.complexityText}>Average case</Text>
              <Text style={styles.complexityText}>
                {sortInfo[`${sortAlgo}`]["complexity"]["average"]}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.complexityText}>Best case</Text>
              <Text style={styles.complexityText}>
                {sortInfo[`${sortAlgo}`]["complexity"]["best"]}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.complexityText}>Stable</Text>
              <Text style={styles.complexityText}>
                {sortInfo[`${sortAlgo}`]["complexity"]["stable"]}
              </Text>
            </View>
          </View>
        ) : (
          <View />
        )}
        {flag[1] ? (
          <Text style={styles.descContainer}>
            {sortInfo[`${sortAlgo}`]["desc"]}
          </Text>
        ) : (
          <View />
        )}
        {flag[2] ? (
          <CodeContent barPos={barPos} data={codeData.bublleSort} />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {},
  barCollection: {
    height: HEIGHT + 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  bar: {
    height: 300,
    width: 40,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: BORDER_WIDTH,
    backgroundColor: "black",
    alignSelf: "flex-end",

    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: BAR_MARGIN,
  },
  barText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  buttonView: {
    padding: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  background: {
    backgroundColor: "#E2E6FA",
  },
  numBar: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  buttonBar: {
    height: 70,
    backgroundColor: "#6D82E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    height: 35,
    width: WIDTH / 5,
    backgroundColor: "#5C69A4",
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  complexityContainer: {},
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 10,
  },
  complexityText: {
    marginVertical: 26,
  },
  descContainer: {
    lineHeight: 30,
    paddingTop: 10,
    marginHorizontal: 10,
  },
});

export default SortContent;
