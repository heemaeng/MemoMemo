import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const StorageListItem = () => {
  return (
    <>
      <View style={styles.item}>
        <Text>아이템1</Text>
      </View>
      <View style={styles.item}>
        <Text>아이템2</Text>
      </View>
      <View style={styles.item}>
        <Text>아이템3</Text>
      </View>
      <View style={styles.item}>
        <Text>아이템4</Text>
      </View>
      <View style={styles.item}>
        <Text>아이템5</Text>
      </View>
    </>
  );
};
export default function StorageScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <StorageListItem />
        </View>
      </ScrollView>
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
