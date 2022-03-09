import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  background-color: transparent;
  height: 500px;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: 16px;
`;

const SearchResultEmpty = () => {
  return (
    <Block>
      <EmptyText>No results were found.</EmptyText>
      <EmptyText>Enter a different search word.</EmptyText>
    </Block>
  );
};

export default SearchResultEmpty;
