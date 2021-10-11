import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ShoppingCartScreen() {
  return (
    <View style={styles.container}>
      <Text>쇼핑 화면 입니다.</Text>
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
