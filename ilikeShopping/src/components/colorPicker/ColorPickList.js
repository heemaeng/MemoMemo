import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import ColorPickItem from './ColorPickItem';
import ColorData from '../../assets/data/color/ColorData';

const Block = styled.View`
  flex: 1;
`;

const ColorPickList = props => {
  const renderItem = ({item}) => {
    return (
      <ColorPickItem
        colorName={item.name}
        colorCode={item.code}
        fontColor={item.fontColor}
        currentColor={props.currentColor}
        onColorPick={props.onColorPick}
      />
    );
  };
  return (
    <Block>
      <FlatList
        data={ColorData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </Block>
  );
};

export default ColorPickList;
