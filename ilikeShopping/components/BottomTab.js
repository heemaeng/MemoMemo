import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import StorageScreen from './StorageScreen';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Tab.Screen name="Storage" component={StorageScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
