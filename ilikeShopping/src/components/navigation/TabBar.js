import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import StorageScreen from '../../screens/StorageScreen';

const LogoTitleImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const LogoTitle = () => {
  return (
    <LogoTitleImage source={require('../../assets/images/leftLogo.png')} />
  );
};

const FONTCOLOR = {
  headerColor: '#fafafa',
  activeTintColor: '#7da453',
  inactiveTintColor: '#aed581',
};

const HEADERTITLE = {
  color: '#212121',
  fontWeight: 'bold',
  fontSize: 20,
};

const BottomTabBackgroundView = () => {
  return <View backgroundColor={'#f8ffd7'} flex={1} />;
};

const TabBarStack = createBottomTabNavigator();

const TabBar = ({navigation}) => {
  const InsertLogo = () => {
    const onAdd = () => {
      navigation.navigate('Insert');
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
            <Text {...props} style={HEADERTITLE}>
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

export default TabBar;
