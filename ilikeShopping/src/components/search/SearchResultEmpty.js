import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  background-color: #e2e2e2;
  height: 500px;
`;

const EmptyText = styled.Text`
  flex: 1;
  align-self: center;
`;

const SearchResultEmpty = () => {
  return (
    <Block>
      <EmptyText>
        결과를 찾을 수 없습니다.다른 검색어를 입력해 보세요.
      </EmptyText>
    </Block>
  );
};

export default SearchResultEmpty;
