import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import ShoppingCartScreen from '../../screens/ShoppingCartScreen';
import StorageScreen from '../../screens/StorageScreen';
import ModalScreen from '../../screens/ModalScreen';
import ContentScreen from '../../screens/ContentScreen';

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

const FONTCOLOR = {
  headerColor: '#fafafa',
  activeTintColor: '#7da453',
  inactiveTintColor: '#aed581',
};
const BottomTabBackgroundView = () => {
  return <View backgroundColor={'#f8ffd7'} flex={1} />;
};
const TabBarStack = createBottomTabNavigator();
const TabBarStackScreen = ({navigation}) => {
  const InsertLogo = () => {
    const onAdd = () => {
      navigation.navigate('Modal');
    };

    return (
      <TouchableOpacity onPress={onAdd}>
        <Icon name="add-circle-outline" size={35} color={'#aed581'} />
      </TouchableOpacity>
    );
  };
  return (
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
        tabBarHideOnKeyboard: true,
      }}>
      <TabBarStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={28} />,
          tabBarActiveTintColor: FONTCOLOR.activeTintColor,
          tabBarInactiveTintColor: FONTCOLOR.inactiveTintColor,
          headerTitle: props => (
            <Text
              {...props}
              style={{color: '#212121', fontWeight: 'bold', fontSize: 20}}>
              메모
            </Text>
          ),
          headerRight: props => <InsertLogo {...props} />,
          headerTitleContainerStyle: {
            paddingLeft: 0,
          },
          headerRightContainerStyle: {
            paddingRight: 10,
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
          tabBarLabel: '결제항목',
          tabBarIcon: ({color}) => (
            <Icon name="reader" color={color} size={28} />
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
};
const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{...opacityTransition}}>
        <RootStack.Screen name="TabBar" component={TabBarStackScreen} />
        <RootStack.Screen name="Modal" component={ModalScreen} />
        <RootStack.Screen name="Content" component={ContentScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
