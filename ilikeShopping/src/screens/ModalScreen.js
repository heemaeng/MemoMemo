import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import AddButton from '../components/add-button';

var db = openDatabase({name: 'MemoDatabase.db'});

const ModalScreen = ({navigation}) => {
  let [memoKey, setMemoKey] = useState('');
  let [memoCode, setMemoCode] = useState('');
  let [memoTitle, setMemoTitle] = useState('');
  let [memoCreateDate, setMemoCreateDate] = useState('');
  let [memoItemKey, setMemoItemKey] = useState('');
  let [memoItemTitle, setMemoItemTitle] = useState('');
  let [memoItemContent, setMemoItemContent] = useState('');

  const backPage = () => {
    navigation.navigate('Home');
  };
  let register_memo = () => {
    if (!memoTitle) {
      alert('제목을 넣어주세요');
      return;
    }

    db.transaction(function (tx) {
      const RANDOMMEMOKEY = Math.random().toString(50).substr(2, 11);
      let memoKey = RANDOMMEMOKEY;
      const RANDOMMEMOITEMKEY = Math.random().toString(50).substr(2, 11);
      tx.executeSql(
        'INSERT INTO MemoItem (key, memoCode, title, content) VALUES (?,?,?,?)',
        [memoItemKey, memoCode, memoItemTitle, memoItemContent],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
          } else alert('Registration Failed');
        },
      );
      tx.executeSql(
        'INSERT INTO Memo (key, memoCode, title, createDate) VALUES (?,?,?)',
        [memoKey, memoCode, memoTitle, memoCreateDate],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
        },
      );
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f8ffd7',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', backgroundColor: '#e2e2e2'}}>
          <Icon name="close" size={28} onPress={backPage} />
          <TextInput
            placeholder="Enter Memo Title"
            onChangeText={memoContent => setMemoTitle(memoContent)}
            style={{padding: 10}}
          />
          <Text style={{alignItems: 'flex-end'}} customClick={register_memo}>
            완료
          </Text>
        </View>

        <View style={{backgroundColor: '#eeeeee', marginTop: 35}}>
          <AddButton />
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <TextInput
                placeholder="Enter Memo Name"
                onChangeText={memoItemTitle => setMemoItemTitle(memoItemTitle)}
                style={{padding: 10}}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ModalScreen;
