import * as React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/components/tab-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import SafeViewAndroid from './src/modules/SafeViewAndroid';
import {CheckProvider} from './src/modules/AppContext';

export default function App() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);
  StatusBar.setBackgroundColor('#bec5b7');
  // StatusBar.setTranslucent(true);
  StatusBar.setBarStyle('dark-content');
  return (
    <CheckProvider>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Navigator />
      </SafeAreaView>
    </CheckProvider>
  );
}
