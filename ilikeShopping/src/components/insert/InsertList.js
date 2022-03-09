import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useCheckState} from '../../hooks/AppContext';
import InsertItem from './InsertItem';
import NoInsertItem from './NoInsertItem';

const Block = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 18px;
  margin-left: 12px;
  margin-right: 12px;
`;

const InsertList = () => {
  const checks = useCheckState();
  return (
    <Block>
      <ScrollView>
        {checks.length > 0 ? (
          <>
            {checks &&
              checks
                .filter(check => check.bookMark)
                .map(check => (
                  <InsertItem
                    id={check.id}
                    key={check.key}
                    productName={check.productName}
                    checkValue={check.checkValue}
                    bookMark={check.bookMark}
                  />
                ))}
            {checks &&
              checks
                .filter(check => !check.bookMark)
                .map(check => (
                  <InsertItem
                    id={check.id}
                    key={check.key}
                    productName={check.productName}
                    checkValue={check.checkValue}
                    bookMark={check.bookMark}
                  />
                ))}
          </>
        ) : (
          <NoInsertItem />
        )}
      </ScrollView>
    </Block>
  );
};

export default InsertList;
