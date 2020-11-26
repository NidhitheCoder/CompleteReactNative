import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/listScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "FRIENDS"
    }
  }
);

export default createAppContainer(navigator);
