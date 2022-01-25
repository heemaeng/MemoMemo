import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
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
  margin-bottom: 18px;
`;

const FirstBlock = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: transparent;
  justify-content: space-between;
`;

const BackPageTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-start;
  margin-right: 12px;
`;

const TitleTextInput = styled.TextInput`
  padding: 0;
  background-color: #fff;
  flex: 1;
  font-size: 14px;
  font-weight: 700;
  color: #000222;
  border-radius: 6px;
  padding-right: 12px;
  padding-left: 12px;
  border-width: 1px;
  border-color: #fafafa;
`;

const ConfirmTouchableOpacity = styled.TouchableOpacity`
  font-weight: bold;
  align-self: center;
  margin-left: 12px;
`;

const ConfirmText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;

const InsertHead = props => {
  const checks = useCheckState();
  const [title, setTitle] = useState('');
  const onSubmit = async () => {
    if (!title.trim()) {
      return Alert.alert('경고', '제목을 입력해주세요', [{text: '확인'}]);
    }
    try {
      const db = await getDBConnection();
      const memoCode = Math.random().toString(20).substr(2, 11);
      await saveMemoItemItems(db, checks, memoCode);
      await saveMemoItems(
        db,
        props.backgroundColor,
        props.fontColor,
        title,
        memoCode,
      );
      return Alert.alert('성공', '작성완료', [
        {
          text: '확인',
          onPress: () => {
            props.dispatch({type: 'REMOVE_ALL'});
            props.navigation.navigate('Home');
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Block>
      <FirstBlock>
        <BackPageTouchableOpacity onPress={props.backPage}>
          <Icon name="close" size={28} color={props.fontColor} />
        </BackPageTouchableOpacity>
        <TitleTextInput
          placeholder="제목을 입력"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <ConfirmTouchableOpacity onPress={onSubmit}>
          <ConfirmText fontColor={props.fontColor}>완료</ConfirmText>
        </ConfirmTouchableOpacity>
      </FirstBlock>
    </Block>
  );
};

export default InsertHead;
