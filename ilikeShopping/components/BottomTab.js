import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';
import StorageScreen from './StorageScreen';

const Tab = createBottomTabNavigator();
const LogoTitle = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/images/leftLogo.png')}
    />
  );
};
const InsertLogo = () => {
  return <Icon name="add-circle-outline" size={35} />;
};
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
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
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
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: props => <InsertLogo {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
          headerRightContainerStyle: {
            paddingRight: 5,
          },
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
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
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
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
}
