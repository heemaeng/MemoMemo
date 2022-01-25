import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import TabBar from '../components/navigation/TabBar';
import InsertScreen from '../screens/InsertScreen';
import DetailScreen from '../screens/DetailScreen';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="TabBar" component={TabBar} />
        <RootStack.Screen
          name="Insert"
          component={InsertScreen}
          options={{
            title: 'Insert',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <RootStack.Screen name="Detail" component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
