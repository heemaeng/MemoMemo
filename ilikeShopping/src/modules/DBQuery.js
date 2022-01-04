import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

export const InsertQuery = (title, item, navigation, dispatch) => {
  const key = Math.random().toString(30).substr(2, 11);
  const code = Math.random().toString(20).substr(2, 11);
  const cdate = Date.now();

  if (!title) {
    alert('제목을 넣어주세요');
    return;
  }
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO MemoItem (key, memoCode, title, content, checkValue) VALUES (?,?,?,?)',
      [item[0].key, code, item[0].title, item[0].count, item[0].done],
      (tx, results) => {
        // console.log('Results', results.rowsAffected);
        // if (results.rowsAffected > 0) {
        //   Alert.alert('Data Inserted Successfully...');
        // } else Alert.alert('Failed...');
      },
    );

    tx.executeSql(
      'INSERT INTO Memo (key, memoCode, title, createDate) VALUES (?,?,?,?)',
      [key, code, title, cdate],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        navigation.navigate('Home');
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => {
                  dispatch({type: 'REMOVE_ALL'});
                  navigation.navigate('Home');
                },
              },
            ],
            {cancelable: false},
          );
        } else alert('Registration Failed');
      },
    );
  });
};
