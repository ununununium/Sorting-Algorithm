import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BubbleSortScreen from "./src/screens/BubbleSortScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		BubbleSort: BubbleSortScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Sorting Algorithm",
		},
	}
);

export default createAppContainer(navigator);
