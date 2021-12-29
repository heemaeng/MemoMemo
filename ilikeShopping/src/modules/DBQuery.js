import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

export const InsertQuery = (title, item, navigation, dispatch) => {
  const key = Math.random().toString(30).substr(2, 11);
  const code = Math.random().toString(20).substr(2, 11);

  if (!title) {
    alert('제목을 넣어주세요');
    return;
  }
  db.transaction(tx => {
    // txn.executeSql(
    //   'INSERT INTO MemoItem (key, memoCode, title, content) VALUES (?,?,?,?)',
    //   [item[0].key, code, item[0].title, item[0].count],
    //   (txn, res) => {
    //     console.log('Results', res.rowsAffected);
    //     if (res.rowsAffected > 0) {
    //     } else alert('Registration Failed');
    //   },
    // );
    // tx.executeSql(
    //   'INSERT INTO MemoItem (key, memoCode, title, content) VALUES (?,?,?,?)',
    //   [item[0].key, code, item[0].title, item[0].count],
    //   (tx, results) => {
    //     console.log('Results', results.rowsAffected);
    //     if (results.rowsAffected > 0) {
    //       Alert.alert('Data Inserted Successfully...');
    //     } else Alert.alert('Failed...');
    //   },
    // );
    tx.executeSql(
      'INSERT INTO Memo (key, memoCode, title, createDate) VALUES (?,?,?,?)',
      ['1', '1', '1', '2021'],
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
                  console.log('success');
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
