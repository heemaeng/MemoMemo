import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function StorageScreen() {
  return (
    <View style={styles.container}>
      <Text>냉장고 화면 입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
