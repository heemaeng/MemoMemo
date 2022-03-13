import React from 'react';
import styled from 'styled-components/native';
import SearchResultItem from './SearchResultItem';
import SearchResultEmpty from './SearchResultEmpty';
import {FlatList} from 'react-native';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 10px;
  padding-bottom: 0px;
`;

const SearchResultList = props => {
  const renderItem = ({item}) => {
    return (
      <SearchResultItem
        itemKey={item.key}
        title={item.title}
        memoCode={item.memoCode}
        fontColor={item.fontColor}
        backgroundColor={item.backgroundColor}
        createDate={item.createDate}
        navigation={props.navigation}
      />
    );
  };

  const ListEmptyComponent = () => {
    return <SearchResultEmpty />;
  };

  return (
    <Block>
      <FlatList
        data={props.searchResultItem}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default SearchResultList;
