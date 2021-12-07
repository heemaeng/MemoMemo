import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.top}>
          <Text style={styles.textStyle}>이번 달 구입 내역</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.textStyle}>이번 달 유통기한 마감</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
  top: {
    backgroundColor: '#aed581',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  middle: {
    backgroundColor: '#fdd835',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: '#fffffb',
    fontWeight: '800',
  },
});
