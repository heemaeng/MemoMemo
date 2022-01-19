import React from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  border-bottom-color: #bbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CheckmarkTouchableOpacity = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 15px;
  border-color: #ced4da;
  border-width: 2px;
  margin-right: 10px;
  ${props =>
    Boolean(props.checkValue) &&
    css`
      border-color: #bdc192;
      border-width: 3px;
    `}
`;

const ProductNameText = styled.Text`
  flex: 5;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 6px;
`;

const AmountText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 10px;
`;

const DetailItem = props => {
  return (
    <Block>
      <CheckmarkTouchableOpacity onPress={props.onToggle}>
        {Boolean(props.checkValue) && (
          <Icon name="checkmark" size={20} color="#087f23" />
        )}
      </CheckmarkTouchableOpacity>
      <ProductNameText done={Boolean(props.checkValue)}>
        {props.productName}
      </ProductNameText>
      <AmountText done={Boolean(props.checkValue)}>{props.amount}</AmountText>
    </Block>
  );
};

export default DetailItem;
