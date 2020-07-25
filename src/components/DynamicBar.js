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
} from "../Algorithms/SortAlgos";

var WIDTH = Dimensions.get("window").width;
var HEIGHT = 100;
var HEIGHT_RANGE = [HEIGHT * 0.3, HEIGHT];

var BORDER_WIDTH = 5;
var BAR_MARGIN = 5;

var DEFAULT_BARS = [77, 44, 99, 55, 88, 66, 33];
// var SLEEP_SEC = 350;

var BORDER_COLOR_RANGE = ["rgba(227,168,255,0)", "rgba(227,168,255,1)"];
const BAR_COLOR_RANGE = ["rgba(216,224,255,1)", "rgba(87,117,255,1)"];

const DynamicBar = ({
  sortAlgo,
  passdown,
  screenWidth,
  screenHeight,
  barBorderWidth,
  barMargin,
  defaultBars,
}) => {
  WIDTH = screenWidth ? screenWidth : Dimensions.get("window").width;
  HEIGHT = screenHeight ? screenHeight : 100;
  HEIGHT_RANGE = [HEIGHT * 0.3, HEIGHT];
  BORDER_WIDTH = barBorderWidth ? barBorderWidth : 5;
  BAR_MARGIN = barMargin ? barMargin : 5;
  DEFAULT_BARS = defaultBars ? defaultBars : [77, 44, 99, 55, 88, 66, 33];

  if (passdown) {
    useEffect(() => {
      passdown.setter({ sort, shuffle, addBar, removeBar });
    }, []);
  }

  const [SLEEP_SEC] = useState(1000);

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
      case "Bubble Sort":
        bubbleSort(
          animSwap,
          getAnimVal,
          visit,
          unvisit,
          SLEEP_SEC,
          changeBarPos
        );
        break;
      case "Insertion Sort":
        insertionSort(animSetValue, getAnimVal, visit, unvisit, SLEEP_SEC);
        break;
      case "Quick Sort":
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
      case "Heap Sort":
        console.log("click heap");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "Selection Sort":
        console.log("click selection");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "Shell Sort":
        console.log("click shell");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "Slow Sort":
        console.log("click slow");
        heapSort(getAnimVal, animSwap, visit, unvisit, SLEEP_SEC);
        break;
      case "Cocktail Shaker Sort":
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
});

export default DynamicBar;
