import React from 'react';
import styled from 'styled-components';

const CheckTemplateBlock = styled.View`
  flex: 1;
  background-color: #f8ffd7;
  padding: 16px;
  padding-bottom: 32px;
`;

const CheckTemplate = ({children}) => {
  return <CheckTemplateBlock>{children}</CheckTemplateBlock>;
};

export default CheckTemplate;
