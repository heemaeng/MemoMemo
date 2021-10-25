import {StyleSheet, Platform, StatusBar} from 'react-native';
// android SafeArea
export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,
  },
});
