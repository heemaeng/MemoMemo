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

// const CheckMarkTouchableOpacity = styled.TouchableOpacity`
//   width: 22px;
//   height: 22px;
//   border-radius: 4px;
//   border-color: #000222;
//   border-width: 2px;
//   margin-right: 10px;
//   ${props =>
//     props.checkValue &&
//     css`
//       border-color: #bdc192;
//       border-width: 12px;
//     `}
// `;

const ProductNameText = styled.Text`
  flex: 5;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 6px;
  ${props =>
    props.checkValue &&
    css`
      text-decoration: line-through;
    `}
`;

const AmountText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 12px;
  ${props =>
    props.checkValue &&
    css`
      text-decoration: line-through;
    `}
`;

const RemoveTouchableOpacity = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const InsertItem = ({id, productName, amount, checkValue}) => {
  const dispatch = useCheckDispatch();
  // const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});

  return (
    <Block>
      {/* <CheckMarkTouchableOpacity onPress={onToggle}>
        {checkValue && (
          <Icon name="checkmark-sharp" size={18} color="#000222" />
        )}
      </CheckMarkTouchableOpacity> */}
      <ProductNameText checkValue={checkValue}>{productName}</ProductNameText>
      <AmountText checkValue={checkValue}>{amount}</AmountText>
      <RemoveTouchableOpacity onPress={onRemove}>
        <Icon name="close-circle-outline" size={24} color="#dd2c00" />
      </RemoveTouchableOpacity>
    </Block>
  );
};

export default InsertItem;
