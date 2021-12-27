import React from 'react';
import styled from 'styled-components';

const CheckTemplateBlock = styled.View`
  flex: 1;
  background-color: #f8ffd7;
  padding: 10px;
`;

const CheckTemplate = ({children}) => {
  return <CheckTemplateBlock>{children}</CheckTemplateBlock>;
};

export default CheckTemplate;
