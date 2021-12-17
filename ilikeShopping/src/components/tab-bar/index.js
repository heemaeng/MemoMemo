import React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ShoppingCartScreen from '../../screens/ShoppingCartScreen';
import StorageScreen from '../../screens/StorageScreen';
import ModalScreen from '../../screens/ModalScreen';

const opacityTransition = {
  transitionSpec: {
    open: {
      animation: 'timing',
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};
const LogoTitle = () => {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../../../assets/images/leftLogo.png')}
    />
  );
};
const InsertLogo = () => {
  return <Icon name="add-circle-outline" size={35} />;
};
const FONTCOLOR = {
  headerColor: '#fcfcfc',
  activeTintColor: '#7da453',
  inactiveTintColor: '#aed581',
};
const BottomTabBackgroundView = () => {
  return <View backgroundColor={'#f8ffd7'} flex={1} />;
};
const TabBarStack = createBottomTabNavigator();
const TabBarStackScreen = () => (
  <TabBarStack.Navigator
    screenOptions={{
      headerShown: true,
      tabBarBackground: () => <BottomTabBackgroundView />,
      headerShadowVisible: false,
      tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
      },
    }}>
    <TabBarStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: '홈',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={28} />,
        tabBarActiveTintColor: FONTCOLOR.activeTintColor,
        tabBarInactiveTintColor: FONTCOLOR.inactiveTintColor,
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleContainerStyle: {
          marginLeft: 5,
        },
        headerStyle: {
          backgroundColor: FONTCOLOR.headerColor,
        },
      }}
    />
    <TabBarStack.Screen
      name="ShoppingCart"
      component={ShoppingCartScreen}
      options={{
        tabBarLabel: '메모',
        tabBarIcon: ({color}) => <Icon name="cart" color={color} size={28} />,
        tabBarActiveTintColor: FONTCOLOR.activeTintColor,
        tabBarInactiveTintColor: FONTCOLOR.inactiveTintColor,
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
    <TabBarStack.Screen
      name="Storage"
      component={StorageScreen}
      options={{
        tabBarLabel: '냉장고',
        tabBarIcon: ({color}) => <Icon name="reader" color={color} size={28} />,
        tabBarActiveTintColor: FONTCOLOR.activeTintColor,
        tabBarInactiveTintColor: FONTCOLOR.inactiveTintColor,
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleContainerStyle: {
          marginLeft: 5,
        },
        headerStyle: {
          backgroundColor: FONTCOLOR.headerColor,
        },
      }}
    />
    <TabBarStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: '설정',
        tabBarIcon: ({color}) => (
          <Icon name="settings" color={color} size={28} />
        ),
        tabBarActiveTintColor: FONTCOLOR.activeTintColor,
        tabBarInactiveTintColor: FONTCOLOR.inactiveTintColor,
        headerTitle: props => <LogoTitle {...props} />,
        headerTitleContainerStyle: {
          marginLeft: 5,
        },
        headerStyle: {
          backgroundColor: FONTCOLOR.headerColor,
        },
      }}
    />
  </TabBarStack.Navigator>
);
const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{...opacityTransition}}>
        <RootStack.Screen name="TabBar" component={TabBarStackScreen} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
