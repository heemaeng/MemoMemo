import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useCheckState} from '../modules/AppContext';
import CheckItem from './CheckItem';

const CheckListBlock = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 10px;
  padding-top: 16px;
`;

const CheckList = () => {
  const checks = useCheckState();
  return (
    <CheckListBlock>
      <ScrollView>
        {checks &&
          checks.map(check => (
            <CheckItem
              key={check.id}
              id={check.id}
              title={check.title}
              count={check.count}
              done={check.done}
            />
          ))}
      </ScrollView>
    </CheckListBlock>
  );
};

export default CheckList;
