import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  elevation: 3;
  margin: 2px 4px 2px 4px;
  ${props =>
    props.colorCode &&
    css`
      background-color: ${props.colorCode};
    `}
`;

const ColorTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ColorPickItem = props => {
  return (
    <Block colorCode={props.colorCode}>
      <ColorTouchableOpacity
        onPress={() => {
          props.onColorPick({
            colorCode: props.colorCode,
            fontColor: props.fontColor,
          });
        }}>
        {props.currentColor === props.colorCode ? (
          <Icon
            name="checkmark-circle-outline"
            size={28}
            color={props.fontColor}
          />
        ) : (
          <Icon
            name="radio-button-off-outline"
            size={28}
            color={props.fontColor}
          />
        )}
      </ColorTouchableOpacity>
    </Block>
  );
};
export default ColorPickItem;
