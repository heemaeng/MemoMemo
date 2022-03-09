import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  background-color: #ffffff;
  padding: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
`;
const HeaderView = styled.View`
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;
const LogoText = styled.Text`
  flex: 1;
  color: #171b24;
  font-weight: 700;
  font-size: 24px;
`;

const SettingsHead = props => {
  return (
    <Block>
      <HeaderView>
        <LogoText>설정</LogoText>
      </HeaderView>
    </Block>
  );
};

export default SettingsHead;
