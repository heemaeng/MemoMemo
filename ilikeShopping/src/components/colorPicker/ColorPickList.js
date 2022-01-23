import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import ColorPickItem from './ColorPickItem';
import ColorData from '../../assets/data/color/ColorData';

const ColorPickList = props => {
  const renderItem = ({item}) => {
    return (
      <ColorPickItem
        colorName={item.name}
        colorCode={item.code}
        currentColor={props.currentColor}
      />
    );
  };
  return <FlatList data={props.currentColor} />;
};

export default ColorPickList;
