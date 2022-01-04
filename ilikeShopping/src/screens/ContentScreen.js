import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import CheckContentTemplate from '../components/CheckContentTemplate';
import CheckContentHead from '../components/CheckContentHead';
import CheckContentList from '../components/CheckContentList';
import CheckContentBottom from '../components/CheckContentBottom';
import {useCheckDispatch} from '../modules/AppContext';

const ContentScreen = ({route, navigation}) => {
  const dispatch = useCheckDispatch();

  const SafeAreaViewStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const backPage = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={SafeAreaViewStyle.container}>
      <CheckContentTemplate>
        <CheckContentHead backPage={backPage} />
        <CheckContentList param={route.params.paramKey} />
        <CheckContentBottom />
      </CheckContentTemplate>
    </SafeAreaView>
  );
};

export default ContentScreen;
