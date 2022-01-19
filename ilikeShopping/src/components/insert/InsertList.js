import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useCheckState} from '../../hooks/AppContext';
import CheckItem from './InsertItem';

const Block = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 10px;
  padding-top: 16px;
`;

const InsertList = () => {
  const checks = useCheckState();
  return (
    <Block>
      <ScrollView>
        {checks &&
          checks.map(check => (
            <CheckItem
              id={check.id}
              key={check.key}
              productName={check.productName}
              amount={check.amount}
              checkValue={check.checkValue}
            />
          ))}
      </ScrollView>
    </Block>
  );
};

export default InsertList;
