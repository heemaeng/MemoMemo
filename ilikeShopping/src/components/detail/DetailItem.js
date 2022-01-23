import React from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  border-bottom-color: #bbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CheckmarkTouchableOpacity = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border-color: #000222;
  border-width: 2px;
  margin-right: 10px;
  ${props =>
    props.checkValue &&
    css`
      border-color: #bdc192;
      border-width: 12px;
    `}
`;

const ProductNameText = styled.Text`
  flex: 5;
  font-size: 16px;
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
  font-size: 16px;
  font-weight: bold;
  color: #000222;
  margin-right: 10px;
  ${props =>
    props.checkValue &&
    css`
      text-decoration: line-through;
    `}
`;

const DetailItem = props => {
  return (
    <Block>
      <CheckmarkTouchableOpacity
        onPress={() =>
          props.onToggle(props.itemKey, Boolean(props.checkValue))
        }>
        {Boolean(props.checkValue) && (
          <Icon name="checkmark-sharp" size={18} color="#000222" />
        )}
      </CheckmarkTouchableOpacity>
      <ProductNameText checkValue={Boolean(props.checkValue)}>
        {props.productName}
      </ProductNameText>
      <AmountText checkValue={Boolean(props.checkValue)}>
        {props.amount}
      </AmountText>
    </Block>
  );
};

export default DetailItem;
