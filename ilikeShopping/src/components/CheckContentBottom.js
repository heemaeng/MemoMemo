import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const CheckContentBottomBlock = styled.View`
  padding-vertical: 14px;
  padding-horizontal: 7px;
  background-color: #dd2c00;
  flex-direction: row;
  justify-content: flex-end;
`;

const CheckContentBottom = () => {
  return (
    <CheckContentBottomBlock>
      <Text>1 /1</Text>
    </CheckContentBottomBlock>
  );
};

export default CheckContentBottom;
