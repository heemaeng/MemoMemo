import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useCheckDispatch} from '../hooks/AppContext';
import InsertTemplate from '../components/insert/InsertTemplate';
import InsertHead from '../components/insert/InsertHead';
import InsertList from '../components/insert/InsertList';
import InsertCreate from '../components/insert/InsertCreate';

const InsertScreen = ({navigation}) => {
  const dispatch = useCheckDispatch();
  const SafeAreaViewStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const backPage = () => {
    dispatch({type: 'REMOVE_ALL'});
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={SafeAreaViewStyle.container}>
      <InsertTemplate>
        <InsertHead
          backPage={backPage}
          navigation={navigation}
          dispatch={dispatch}
        />
        <InsertList />
        <InsertCreate />
      </InsertTemplate>
    </SafeAreaView>
  );
};
export default InsertScreen;
