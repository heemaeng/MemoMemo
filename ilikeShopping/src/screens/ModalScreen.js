import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CheckTemplate from '../components/CheckTemplate';
import CheckHead from '../components/CheckHead';
import CheckList from '../components/CheckList';
import CheckCreate from '../components/CheckCreate';
import {useCheckDispatch} from '../modules/AppContext';

const ModalScreen = ({navigation}) => {
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
      <CheckTemplate>
        <CheckHead
          backPage={backPage}
          navigation={navigation}
          dispatch={dispatch}
        />
        <CheckList />
        <CheckCreate />
      </CheckTemplate>
    </SafeAreaView>
  );
};
export default ModalScreen;
