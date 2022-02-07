import React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeViewAndroid from './src/utils/SafeViewAndroid';
import {CheckProvider} from './src/hooks/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);
  StatusBar.setBackgroundColor('#fff');
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('dark-content');
  return (
    <CheckProvider>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <AppNavigator />
      </SafeAreaView>
    </CheckProvider>
  );
}
