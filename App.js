import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BubbleSortScreen from "./src/screens/BubbleSortScreen";
import TestScreen from "./src/screens/TestScreen";
import InsertionSortScreen from "./src/screens/InsertionSortScreen";
import QuickSortScreen from "./src/screens/QuickSortScreen";
import HeapSortScreen from "./src/screens/HeapSortScreen";
import SelectionSortScreen from "./src/screens/SelectionSortScreen";
import ShellSortScreen from "./src/screens/ShellSortScreen";
import SlowSortScreen from "./src/screens/SlowSortScreen";
import CocktailShakerSortScreen from "./src/screens/CocktailShakerSortScreen";
import DynamicHomeScreen from "./src/screens/DynamicHomeScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		BubbleSort: BubbleSortScreen,
		Test: TestScreen,
		InsertionSort: InsertionSortScreen,
		QuickSort: QuickSortScreen,
		HeapSort: HeapSortScreen,
		SelectionSort: SelectionSortScreen,
		ShellSort: ShellSortScreen,
		SlowSort: SlowSortScreen,
		CocktailShakerSort: CocktailShakerSortScreen,
		DynamicHome: DynamicHomeScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Algorithms",
		},
	}
);

export default createAppContainer(navigator);
