import React from 'react';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding: 0;
  background-color: #ffffff;
`;

const SettingsTemplate = ({children}) => {
  return <Block>{children}</Block>;
};

export default SettingsTemplate;
