import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCheckState} from '../../hooks/AppContext';
import {Alert} from 'react-native';
import {getDBConnection} from '../../api/dbService/dbConnection';
import {saveMemoItems} from '../../api/dbService/memoDBService';
import {saveMemoItemItems} from '../../api/dbService/memoItemDBService';

const Block = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding-right: 5px;
  padding-bottom: 6px;
`;

const TitleTextInput = styled.TextInput`
  padding: 0;
  background-color: #fff;
  flex: 1;
  margin-left: 7px;
  margin-right: 7px;
  padding-bottom: 0px;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  border-radius: 16px;
  padding-right: 12px;
  padding-left: 12px;
  border-width: 1px;
  border-color: #fafafa;
`;

const ConfirmTouchableOpacity = styled.TouchableOpacity`
  font-weight: bold;
  align-items: flex-end;
`;

const ConfirmText = styled.Text``;

const InsertHead = ({backPage, navigation, dispatch}) => {
  const checks = useCheckState();
  const [title, setTitle] = useState('');
  const onSubmit = async () => {
    if (!title.trim()) {
      return Alert.alert('경고', '제목을 입력해주세요', [{text: '확인'}]);
    }
    try {
      const db = await getDBConnection();
      await saveMemoItemItems(db, checks);
      await saveMemoItems(db, title);
      return Alert.alert('성공', '작성완료', [
        {
          text: '확인',
          onPress: () => {
            dispatch({type: 'REMOVE_ALL'});
            navigation.navigate('Home');
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Block>
      <Icon name="close" size={28} onPress={backPage} />
      <TitleTextInput
        placeholder="제목을 입력"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <ConfirmTouchableOpacity onPress={onSubmit}>
        <ConfirmText>완료</ConfirmText>
      </ConfirmTouchableOpacity>
    </Block>
  );
};

export default InsertHead;
