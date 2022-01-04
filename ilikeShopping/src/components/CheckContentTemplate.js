import React from 'react';
import styled from 'styled-components';

const CheckContentTemplateBlock = styled.View`
  flex: 1;
  padding: 16px;
`;

const CheckContentTemplate = ({children}) => {
  return <CheckContentTemplateBlock>{children}</CheckContentTemplateBlock>;
};

export default CheckContentTemplate;
