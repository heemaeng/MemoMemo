import React from 'react';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 10px;
  padding-top: 10px;
  padding-bottom: 0px;
`;
const SettingsText = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;
const SettingsContent = props => {
  return <Block>{/* <SettingText></SettingText> */}</Block>;
};

export default SettingsContent;
