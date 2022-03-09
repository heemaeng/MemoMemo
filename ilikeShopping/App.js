import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeViewAndroid from './src/utils/SafeViewAndroid';
import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';

export default function App() {
  // setTimeout(() => {
  //   SplashScreen.hide();
  // }, 500);
  // StatusBar.setBackgroundColor('#fff');
  // StatusBar.setTranslucent(true);
  // StatusBar.setBarStyle('dark-content');
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <AppNavigator />
    </SafeAreaView>
  );
}
