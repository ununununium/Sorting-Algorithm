import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen from "./src/screens/TestScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Test: TestScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Sorting Algorithm",
		},
	}
);

export default createAppContainer(navigator);
