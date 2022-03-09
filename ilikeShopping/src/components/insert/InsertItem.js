import React from 'react';
import styled, {css} from 'styled-components/native';
import {useCheckDispatch} from '../../hooks/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  border-bottom-color: #bbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const WrapText = styled.Text`
  flex: 5;
  margin-right: 6px;
`;
const ProductNameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000222;
  align-items: flex-start;
  ${props =>
    props.checkValue &&
    css`
      text-decoration: line-through;
    `}
  ${props =>
    props.bookMark &&
    css`
      background-color: #bfff00;
    `}
`;
const RemoveTouchableOpacity = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
const InsertItem = ({id, productName, checkValue, bookMark}) => {
  const dispatch = useCheckDispatch();
  const onRemove = () => dispatch({type: 'REMOVE', id});
  return (
    <Block>
      <WrapText>
        <ProductNameText checkValue={checkValue} bookMark={bookMark}>
          {productName}
        </ProductNameText>
      </WrapText>
      <RemoveTouchableOpacity onPress={onRemove}>
        <Icon name="close-circle-outline" size={24} color="#dd2c00" />
      </RemoveTouchableOpacity>
    </Block>
  );
};

export default InsertItem;
