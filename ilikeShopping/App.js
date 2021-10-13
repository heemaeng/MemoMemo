//App.js
import * as React from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ShoppingCartScreen from './components/ShoppingCartScreen';
import StorageScreen from './components/StorageScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Tab.Screen name="Storage" component={StorageScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
