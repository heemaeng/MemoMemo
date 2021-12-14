import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>셋팅 화면 입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
});
