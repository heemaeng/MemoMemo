import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import Mytextinput from '../components/Mytextinput';
import Mybutton from '../components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/Ionicons';

var db = openDatabase({name: 'MemoDatabase.db'});

const ModalScreen = ({navigation}) => {
  let [memoName, setMemoName] = useState('');
  let [memoContent, setMemoContent] = useState('');
  let [memoCreateDate, setMemoCreateDate] = useState('');

  const backPage = () => {
    navigation.navigate('Home');
  };
  let register_memo = () => {
    console.log(memoName, memoContent, memoCreateDate);

    if (!memoName) {
      alert('Please fill memoName');
      return;
    }
    if (!memoContent) {
      alert('Please fill Memo Content');
      return;
    }
    if (!memoCreateDate) {
      alert('Please fill Memo Create Date');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO Memo (memo_name, memo_content, memo_create_date) VALUES (?,?,?)',
        [memoName, memoContent, memoCreateDate],
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
        <View>
          <Icon name="close" size={28} onPress={backPage} />
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1, justifyContent: 'space-between'}}>
            <Mytextinput
              placeholder="Enter Memo Name"
              onChangeText={memoName => setMemoName(memoName)}
              style={{padding: 10}}
            />
            <Mytextinput
              placeholder="Enter Memo Content"
              onChangeText={memoContent => setMemoContent(memoContent)}
              style={{padding: 10}}
            />
            <Mytextinput
              placeholder="Enter Memo Create Date"
              onChangeText={memoCreateDate => setMemoCreateDate(memoCreateDate)}
              style={{padding: 10}}
            />
            <Mybutton title="Submit" customClick={register_memo} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
// export default function ModalScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f8ffd7',
//       }}>
//       <Text>Modal</Text>
//     </View>
//   );
// }

export default ModalScreen;
