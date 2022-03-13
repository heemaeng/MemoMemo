import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import HomeItem from './HomeItem';
import NoHomeItem from './NoHomeItem';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 0px;
`;

const HomeList = props => {
  const renderItem = ({item, index}) => {
    return (
      <HomeItem
        index={index}
        memoKey={item.key}
        memoCode={item.memoCode}
        backgroundColor={item.backgroundColor}
        fontColor={item.fontColor}
        title={item.title}
        createDate={item.createDate}
        navigation={props.navigation}
        selectMode={props.selectMode}
        memoAllCheck={props.memoAllCheck}
      />
    );
  };

  return (
    <Block>
      {props.memo.length > 0 ? (
        <FlatList
          data={props.memo}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator
          keyExtractor={item => String(item.key)}
        />
      ) : (
        <NoHomeItem navigation={props.navigation} />
      )}
    </Block>
  );
};

export default HomeList;
