import { createStackNavigator,createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";

const AppStackNav = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: Login,
		navigationOptions: {
			header: null
		}
	},
	Signup: {
		screen: Signup,
		navigationOptions: {
			header: null
		}
	},
	Dashboard: { screen: Dashboard }
},{
	initialRouteName: 'Home'
});

const AppS=createAppContainer(AppStackNav);
export default AppS;
