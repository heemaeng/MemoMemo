import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
`;
const SearchTemplate = ({children}) => {
  return <Block>{children}</Block>;
};

export default SearchTemplate;
