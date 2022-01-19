import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Block = styled.View`
  padding-vertical: 14px;
  padding-horizontal: 7px;
  background-color: #dd2c00;
  flex-direction: row;
  justify-content: flex-end;
`;

const DetailBottom = props => {
  return (
    <Block>
      <Text>
        {props.memoItemCheckCount} /{props.memoItemCount}
      </Text>
    </Block>
  );
};

export default DetailBottom;
