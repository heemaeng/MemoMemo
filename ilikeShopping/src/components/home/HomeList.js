import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import HomeItem from './HomeItem';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
  padding-top: 6px;
`;

const HomeList = props => {
  const renderItem = ({item}) => {
    return (
      <HomeItem
        id={item.key}
        key={item.key}
        memoCode={item.memoCode}
        backgroundColor={item.backgroundColor}
        fontColor={item.fontColor}
        title={item.title}
        createDate={item.createDate}
        navigation={props.navigation}
      />
    );
  };

  return (
    <Block>
      <FlatList
        data={props.memo}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default HomeList;
