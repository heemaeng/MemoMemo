import React from 'react';
import styled from 'styled-components/native';

const Block = styled.View`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 12px;
  padding-bottom: 32px;
`;
const AddTouchableOpacity = styled.TouchableOpacity`
  background-color: #000000;
  width: 54px;
  height: 54px;
  border-radius: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 24px;
  right: 10px;
  align-self: center;
  elevation: 4;
`;
const AddText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const HomeButton = props => {
  return (
    <Block>
      <AddTouchableOpacity onPress={() => props.navigation.navigate('Insert')}>
        <AddText>+</AddText>
      </AddTouchableOpacity>
    </Block>
  );
};

export default HomeButton;
