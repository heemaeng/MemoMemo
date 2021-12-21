import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>셋팅 화면 입니다.</Text>
      <Text>크게보기/작게보기</Text>
      <Text>위젯보기</Text>
      <Text>만든이</Text>
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
