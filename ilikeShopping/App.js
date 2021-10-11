import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './components/HomeScreen';
import ShoppingCartScreen from './components/ShoppingCartScreen';
import SettingScreen from './components/SettingScreen';
import StorageScreen from './components/StorageScreen';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const TabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
    },
    ShoppingCart: {
      screen: ShoppingCartScreen,
    },
    Storage: {
      screen: StorageScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  });

  setTimeout(() => {
    SplashScreen.hide();
  }, 500);

  return createAppContainer(TabNavigator);
}
