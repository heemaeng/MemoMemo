import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CheckContentTemplate from '../components/CheckContentTemplate';
import CheckContentHead from '../components/CheckContentHead';
import CheckContentList from '../components/CheckContentList';
import CheckContentBottom from '../components/CheckContentBottom';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

const ContentScreen = ({route}) => {
  return (
    <SafeAreaView>
      {/* <CheckContentTemplate>
        <CheckContentHead />
        <CheckContentList />
        <CheckContentBottom />
      </CheckContentTemplate> */}
      <View>
        <Text>{route.params.paramKey}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ContentScreen;
