import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding: 16px;
`;

const DetailTemplate = ({children}) => {
  return <Block>{children}</Block>;
};

export default DetailTemplate;
