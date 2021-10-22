//App.js
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './components/BottomTab';

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
