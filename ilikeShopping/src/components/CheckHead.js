import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {InsertQuery} from '../modules/DBQuery';
import {useCheckState} from '../modules/AppContext';

const CheckHeadBlock = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding-right: 5px;
  padding-bottom: 6px;
`;

const TextInputBlock = styled.TextInput`
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

const ConfirmBlock = styled.TouchableOpacity`
  font-weight: bold;
  align-items: flex-end;
`;

const CheckHead = ({backPage, navigation, dispatch}) => {
  const checks = useCheckState();
  const [title, setTitle] = useState('');
  const onSubmit = () => {
    InsertQuery(title, checks, navigation, dispatch);
  };

  return (
    <CheckHeadBlock>
      <Icon name="close" size={28} onPress={backPage} />
      <TextInputBlock
        placeholder="제목을 입력"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <ConfirmBlock onPress={onSubmit}>
        <Text>완료</Text>
      </ConfirmBlock>
    </CheckHeadBlock>
  );
};

export default CheckHead;
