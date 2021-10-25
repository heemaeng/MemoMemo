import * as React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './components/BottomTab';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeViewAndroid from './components/SafeViewAndroid';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);
  StatusBar.setBackgroundColor('#e9ecef');
  // StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('dark-content');
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
