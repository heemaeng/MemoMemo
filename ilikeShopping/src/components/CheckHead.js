import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckHeadBlock = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding-right: 5px;
`;

const TextInputBlock = styled.TextInput`
  padding: 4px;
  background-color: transparent;
  flex: 1;
  margin-left: 7px;
  margin-right: 7px;
  border-bottom-width: 0.5px;
  padding-bottom: 0px;
`;

const ConfirmBlock = styled.Text`
  align-items: flex-end;
`;

const CheckHead = ({backPage}) => {
  return (
    <CheckHeadBlock>
      <Icon name="close" size={28} onPress={backPage} />
      <TextInputBlock placeholder="제목을 입력" />
      <ConfirmBlock>완료</ConfirmBlock>
    </CheckHeadBlock>
  );
};

export default CheckHead;
