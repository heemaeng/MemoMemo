import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import CheckItem from './CheckItem';

const CheckListBlock = styled.View`
  flex: 1;
  background-color: #eeeeee;
`;

const CheckList = () => {
  return (
    <CheckListBlock>
      <ScrollView>
        <CheckItem title="토마토" count="2개" done={true} />
      </ScrollView>
    </CheckListBlock>
  );
};

export default CheckList;
