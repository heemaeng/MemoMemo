import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  padding-bottom: 32px;
`;

const InsertTemplate = ({children}) => {
  return <Block>{children}</Block>;
};

export default InsertTemplate;
