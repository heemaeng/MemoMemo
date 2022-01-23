import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Block = styled.View`
  padding-vertical: 14px;
  padding-horizontal: 8px;
  background-color: transparent;
  flex-direction: row;
  justify-content: flex-end;
`;

const CountText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;

const DetailBottom = props => {
  return (
    <Block>
      <CountText>
        {props.memoItemCheckCount} /{props.memoItemCount}
      </CountText>
    </Block>
  );
};

export default DetailBottom;
