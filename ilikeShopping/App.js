/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function ilikeShopping() {
  setTimeout(() => {
    SplashScreen.hide();
  }, 500);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

export default ilikeShopping;
