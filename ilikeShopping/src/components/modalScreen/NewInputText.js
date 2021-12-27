import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const NewInputTextView = styled.View`
  background-color: #111222;
`;

const NewInputText = props => {
  return (
    <>
      {props.countInputTextView &&
        props.countInputTextView.map(ele => {
          <View styles={{backgroundColor: '#111222'}}></View>;
        })}
    </>
  );
};
export default NewInputText;
