import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenWithState from './src/screens/SquareScreenWithState';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Square: SquareScreen,
    SquareState:SquareScreenWithState
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "APP"
    }
  }
);

export default createAppContainer(navigator);
