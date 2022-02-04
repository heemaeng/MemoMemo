import React from 'react';
import styled from 'styled-components/native';
import SearchHistoryItem from './SearchHistoryItem';
import {FlatList} from 'react-native';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const HeadView = styled.View`
  padding: 8px 10px 8px 10px;
`;
const HeadText = styled.Text`
  font-size: 15px;
  color: #000000;
`;

const SearchHistoryList = props => {
  const renderItem = ({item}) => {
    return (
      <SearchHistoryItem
        itemKey={item.key}
        searchWord={item.searchWord}
        createDate={item.createDate}
        deleteSearchHistoryData={props.deleteSearchHistoryData}
        loadSearchDataCallback={props.loadSearchDataCallback}
      />
    );
  };

  return (
    <Block>
      <HeadView>
        <HeadText>최근 검색</HeadText>
      </HeadView>
      <FlatList
        data={props.searchHistoryItem}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default SearchHistoryList;
