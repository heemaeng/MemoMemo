import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  background-color: #e2e2e2;
  padding: 15px;
`;

const SearchView = styled.View`
  background-color: #9e9e9e;
  padding-horizontal: 5px;
  padding-vertical: 0px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const SearchTextInput = styled.TextInput`
  width: 90%;
  padding: 0;
`;

const Search = () => {
  return (
    <Block>
      <SearchView>
        <Icon name="search" size={20} />
        <SearchTextInput placeholder="검색" />
      </SearchView>
    </Block>
  );
};

export default Search;
