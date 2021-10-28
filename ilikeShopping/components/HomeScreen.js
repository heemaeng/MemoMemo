import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.coinView}>
        <View style={styles.viewContainer}>
          <View style={styles.subView_blue} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_green} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_blue} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_green} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_blue} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_green} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_blue} />
        </View>
        <View style={styles.viewContainer}>
          <View style={styles.subView_green} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  viewContainer: {
    flexDirection: 'row',
    height: 100,
  },
  subView_blue: {
    backgroundColor: 'blue',
    flex: 1,
  },
  subView_green: {
    backgroundColor: 'green',
    flex: 1,
  },
});
