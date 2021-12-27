import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const CheckItemBlock = styled.View`
  border-bottom-color: #bbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.Text`
  flex: 5;
  font-size: 21px;
  color: #ced4da;
`;

const CountText = styled.Text`
  font-size: 21px;
  color: #ced4da;
`;
const Circle = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-color: blue;
  border-width: 2px;
  /* margin-right: 20px;
  margin-left: 20px; */
`;

const CheckItem = ({id, done, title, count}) => {
  return (
    <CheckItemBlock>
      <TouchableOpacity>
        <Circle />
      </TouchableOpacity>
      <TitleText done={done}>{title}</TitleText>
      <CountText done={done}>{count}</CountText>
    </CheckItemBlock>
  );
};

export default CheckItem;
