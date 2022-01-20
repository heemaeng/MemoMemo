import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import DetailItem from './DetailItem';

const Block = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 10px;
  padding-top: 16px;
`;

const DetailList = props => {
  const renderItem = ({item}) => {
    return (
      <DetailItem
        itemKey={item.key}
        productName={item.productName}
        amount={item.amount}
        checkValue={item.checkValue}
        onToggle={props.onToggle}
      />
    );
  };

  return (
    <Block>
      <FlatList
        data={props.memoItem}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default DetailList;
