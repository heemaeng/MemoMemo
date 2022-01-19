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

const ProductNameText = styled.Text`
  flex: 5;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 6px;
`;

const QuantityText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 10px;
`;

const CheckMarkTouchableOpacity = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 15px;
  border-color: #ced4da;
  border-width: 2px;
  margin-right: 10px;
  ${props =>
    props.checkValue &&
    css`
      border-color: #bdc192;
      border-width: 3px;
    `}
`;

const RemoveTouchableOpacity = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const InsertItem = ({id, productName, amount, checkValue}) => {
  const dispatch = useCheckDispatch();
  const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});

  return (
    <Block>
      <CheckMarkTouchableOpacity onPress={onToggle}>
        {checkValue && <Icon name="checkmark" size={20} color="#087f23" />}
      </CheckMarkTouchableOpacity>
      <ProductNameText checkValue={checkValue}>{productName}</ProductNameText>
      <QuantityText checkValue={checkValue}>{amount}</QuantityText>
      <RemoveTouchableOpacity onPress={onRemove}>
        <Icon name="trash" size={20} color="#dd2c00" />
      </RemoveTouchableOpacity>
    </Block>
  );
};

export default InsertItem;
