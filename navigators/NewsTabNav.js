import { createBottomTabNavigator } from "react-navigation";
import NewsGlobal from "../screens/NewsGlobal";
import NewsLocal from "../screens/NewsLocal";

const NewsTabNav = createBottomTabNavigator(
	{
		NewsGlobal: { screen: NewsGlobal },
		NewsLocal: { screen: NewsLocal }
	},
	{
		backBehavior: "none",
		tabBarPosition: "bottom"
	}
);
export default NewsTabNav;
