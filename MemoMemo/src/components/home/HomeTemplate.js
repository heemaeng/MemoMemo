import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding: 0;
  background-color: #ffffff;
`;

const HomeTemplate = ({children}) => {
  return <Block>{children}</Block>;
};

export default HomeTemplate;
