import React from 'react';
import styled, {css} from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Block = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CheckmarkTouchableView = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border-color: #000222;
  border-width: 2px;
  margin-right: 10px;
  ${props =>
    props.checkValue &&
    css`
      border-color: #3dc86b;
    `}
`;
const ProductNameView = styled.View`
  flex: 1;
  ${props =>
    props.checkValue &&
    css`
      background-color: #e2e2e2;
    `}
`;
const WrapText = styled.Text`
  flex: 5;
  margin-right: 6px;
`;
const ProductNamePressable = styled.Pressable`
  flex: 5;
  margin-bottom: 20px;
`;
const ProductNameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000222;
  margin-right: 6px;
  ${props =>
    props.checkValue &&
    css`
      color: #e2e2e2;
    `}
  ${props =>
    props.bookMark &&
    css`
      background-color: #bfff00;
    `}
`;

const DetailItem = ({
  id,
  itemKey,
  productName,
  checkValue,
  bookMark,
  onToggle,
}) => {
  return (
    <ProductNamePressable
      style={({pressed}) => [
        {backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent'},
      ]}
      onPress={() => onToggle(itemKey, Boolean(checkValue))}>
      <Block>
        <CheckmarkTouchableView checkValue={checkValue}>
          {Boolean(checkValue) && (
            <FontAwesome name="check" size={18} color="#3dc86b" />
          )}
        </CheckmarkTouchableView>
        <ProductNameView>
          <WrapText>
            <ProductNameText
              checkValue={Boolean(checkValue)}
              bookMark={Boolean(bookMark)}>
              {productName}
            </ProductNameText>
          </WrapText>
        </ProductNameView>
      </Block>
    </ProductNamePressable>
  );
};

export default DetailItem;
