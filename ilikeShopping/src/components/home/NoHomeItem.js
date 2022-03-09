import React from 'react';
import styled, {css} from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: #e2e2e2;
  justify-content: center;
  align-items: center;
`;
const ButtonView = styled.View`
  border-radius: 50px;
  padding: 5px;
  margin-right: 10px;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
  elevation: 3;
`;
const EmptyView = styled.View`
  flex-direction: row;
`;
const EmptyText = styled.Text`
  font-size: 16px;
  align-self: center;
`;
const NoHomeItem = props => {
  return (
    <Block>
      <EmptyView>
        <ButtonView
          backgroundColor={'#000'}
          onPress={() => {
            props.navigation.navigate('Insert');
          }}>
          <AntDesign name="plus" size={21} color={'#fff'} />
        </ButtonView>
        <EmptyText>Add MemoMemo</EmptyText>
      </EmptyView>
    </Block>
  );
};

export default NoHomeItem;
