import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.coinView}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 5,
          }}>
          <View style={{backgroundColor: 'blue', flex: 1}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <Text>홈 화면 입니다.</Text>
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
});
