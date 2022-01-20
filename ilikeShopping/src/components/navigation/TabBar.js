import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import InsertScreen from '../../screens/InsertScreen';

const BottomTabBackgroundView = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-top-width: 1px;
  border-color: #e0e0e0;
  flex-direction: row;
  align-items: center;
`;

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'cart' : 'cart-outline';
            size = 29;
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
            size = 30;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        headerShown: false,
        tabBarBackground: () => <BottomTabBackgroundView />,
        headerShadowVisible: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#4c8c4a',
        tabBarInactiveTintColor: '#171b24',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen
        name="Add"
        component={InsertScreen}
        options={{tabBarLabel: '메모추가'}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: '설정',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
