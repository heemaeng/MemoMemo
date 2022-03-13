import React from 'react';
import styled from 'styled-components/native';
import ColorPickList from './ColorPickList';

const Block = styled.View`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 12px;
  padding-bottom: 32px;
`;

const Form = styled.View`
  background-color: #eeeeee;
  padding: 10px;
  padding-bottom: 40px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const ColorPicker = props => {
  return (
    <Block>
      <Form>
        <ColorPickList
          currentColor={props.currentColor}
          onColorPick={props.onColorPick}
        />
      </Form>
    </Block>
  );
};

export default ColorPicker;
