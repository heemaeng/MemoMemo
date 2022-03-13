import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const ShoppingListItem = () => {
  return (
    <View>
      <Text>이곳에 쇼핑메모</Text>
    </View>
  );
};

export default function ShoppingCartScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>{/* <Sqlite /> */}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    paddingLeft: 6,
    paddingRight: 6,
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
});
