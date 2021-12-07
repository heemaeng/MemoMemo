import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import StorageScreen from '../screens/StorageScreen';

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
const FONTCOLOR = {
  headerColor: '#fcfcfc',
  tintColor: '#4b830d',
};
const RedView = () => {
  return <View backgroundColor={'#f8ffd7'} flex={1} />;
};
export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarBackground: () => <RedView />,
        headerShadowVisible: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tarBarLabel: '홈',
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={28} />
          ),
          tabBarActiveTintColor: FONTCOLOR.tintColor,
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
          headerStyle: {
            backgroundColor: FONTCOLOR.headerColor,
          },
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{
          tabBarLabel: '메모',
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" color={color} size={28} />
          ),
          tabBarActiveTintColor: FONTCOLOR.tintColor,
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: props => <InsertLogo {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
          headerRightContainerStyle: {
            paddingRight: 5,
          },
          headerStyle: {
            backgroundColor: FONTCOLOR.headerColor,
          },
        }}
      />
      <Tab.Screen
        name="Storage"
        component={StorageScreen}
        options={{
          tabBarLabel: '냉장고',
          tabBarIcon: ({color}) => (
            <Icon name="reader-outline" color={color} size={28} />
          ),
          tabBarActiveTintColor: FONTCOLOR.tintColor,
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
          headerStyle: {
            backgroundColor: FONTCOLOR.headerColor,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({color}) => (
            <Icon name="options-outline" color={color} size={28} />
          ),
          tabBarActiveTintColor: FONTCOLOR.tintColor,
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleContainerStyle: {
            marginLeft: 5,
          },
          headerStyle: {
            backgroundColor: FONTCOLOR.headerColor,
          },
        }}
      />
    </Tab.Navigator>
  );
}
