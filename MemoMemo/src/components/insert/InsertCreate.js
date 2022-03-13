import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorPicker from '../colorPicker/ColorPicker';

const AddTouchableOpacity = styled.TouchableOpacity`
  background-color: #38d9a9;
  width: 54px;
  height: 54px;
  border-radius: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 8px;
  align-self: center;
  elevation: 2;
  ${props =>
    props.memoInputOpen &&
    css`
      transform: rotate(45deg);
      background-color: #ff6b6b;
    `}
`;

const ColorTouchableOpacity = styled.TouchableOpacity`
  border: #e2e2e2;
  width: 32px;
  height: 32px;
  border-radius: 15px;
  position: absolute;
  right: 102px;
  bottom: 16px;
  align-items: center;
  justify-content: center;
  align-self: center;
  elevation: 2;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const AddText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const InsertCreate = props => {
  const [memoInputOpen, setMemoInputOpen] = useState(false);
  const [colorSelectOpen, setColorSelectOpen] = useState(false);

  const onToggle = () => {
    setColorSelectOpen(false);
    props.setModalVisible(true);
  };

  const onColorPickToggle = () => {
    setMemoInputOpen(false);
    setColorSelectOpen(!colorSelectOpen);
  };

  return (
    <>
      {colorSelectOpen && (
        <ColorPicker
          currentColor={props.backgroundColor}
          onColorPick={props.onColorPick}
        />
      )}
      <AddTouchableOpacity onPress={onToggle} open={memoInputOpen}>
        <AddText>+</AddText>
      </AddTouchableOpacity>
      <ColorTouchableOpacity
        onPress={onColorPickToggle}
        backgroundColor={props.backgroundColor}>
        {colorSelectOpen ? (
          <Icon name="close-outline" size={20} color={props.fontColor} />
        ) : (
          <Icon
            name="color-palette-outline"
            size={20}
            color={props.fontColor}
          />
        )}
      </ColorTouchableOpacity>
    </>
  );
};

export default InsertCreate;
