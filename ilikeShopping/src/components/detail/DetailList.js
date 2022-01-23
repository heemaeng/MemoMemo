import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import DetailItem from './DetailItem';

const Block = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 18px;
`;

const CautionMark = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  width: 8px;
  height: 8px;
  border-radius: 4px;
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
      {props.memoItemCheckCount !== props.memoItemCount && <CautionMark />}
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
