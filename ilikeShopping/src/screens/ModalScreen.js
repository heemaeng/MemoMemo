import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {openDatabase} from 'react-native-sqlite-storage';
import CheckTemplate from '../components/CheckTemplate';
import CheckHead from '../components/CheckHead';
import CheckList from '../components/CheckList';
import CheckCreate from '../components/CheckCreate';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// var db = openDatabase({name: 'MemoDatabase.db'});

const ModalScreen = ({navigation}) => {
  const SafeAreaViewStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  const backPage = () => {
    navigation.navigate('Home');
  };

  return (
    // <KeyboardAwareScrollView>
    <SafeAreaView style={SafeAreaViewStyle.container}>
      <CheckTemplate>
        <CheckHead backPage={backPage} />
        <CheckList />
        <CheckCreate />
      </CheckTemplate>
    </SafeAreaView>
    // </KeyboardAwareScrollView>
  );
};
export default ModalScreen;
