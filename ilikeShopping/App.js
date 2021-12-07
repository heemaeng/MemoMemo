import * as React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Tabs} from './modules/BottomTab';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeViewAndroid from './modules/SafeViewAndroid';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);
  StatusBar.setBackgroundColor('#bec5b7');
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
