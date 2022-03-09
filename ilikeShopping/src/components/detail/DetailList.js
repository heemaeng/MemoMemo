import React from 'react';
import {FlatList, ScrollView} from 'react-native';
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
  // const renderItem = ({item}) => {
  //   return (
  //     <DetailItem
  //       itemKey={item.key}
  //       productName={item.productName}
  //       checkValue={item.checkValue}
  //       onToggle={props.onToggle}
  //       bookMark={item.bookMark}
  //     />
  //   );
  // };
  return (
    <Block>
      {props.memoItemCheckCount !== props.memoItemCount && <CautionMark />}
      {/* <FlatList
        data={props.memoItem}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator
      /> */}
      <ScrollView>
        {props.memoItem &&
          props.memoItem
            .filter(data => data.bookMark)
            .map(data => (
              <DetailItem
                id={data.id}
                key={data.id}
                itemKey={data.key}
                productName={data.productName}
                checkValue={data.checkValue}
                bookMark={data.bookMark}
                onToggle={props.onToggle}
              />
            ))}
        {props.memoItem &&
          props.memoItem
            .filter(data => !data.bookMark)
            .map(data => (
              <DetailItem
                id={data.id}
                key={data.id}
                itemKey={data.key}
                productName={data.productName}
                checkValue={data.checkValue}
                bookMark={data.bookMark}
                onToggle={props.onToggle}
              />
            ))}
      </ScrollView>
    </Block>
  );
};

export default DetailList;
