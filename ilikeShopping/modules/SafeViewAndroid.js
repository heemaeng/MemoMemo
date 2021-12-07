import {StyleSheet, Platform, StatusBar} from 'react-native';
// android SafeArea
export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? -StatusBar.currentHeight : 0,
  },
});
