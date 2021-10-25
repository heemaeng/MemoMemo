import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import StorageScreen from './StorageScreen';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
      activeColor="#000">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tarBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={28} />
          ),
          headerTitleAlign: 'center',
          headerTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'ShoppingCart',
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" color={color} size={28} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Storage"
        component={StorageScreen}
        options={{
          tabBarLabel: 'Storage',
          tabBarIcon: ({color}) => (
            <Icon name="reader-outline" color={color} size={28} />
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Icon name="options-outline" color={color} size={28} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}
