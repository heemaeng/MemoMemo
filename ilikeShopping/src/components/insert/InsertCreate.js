import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCheckDispatch, useCheckNextId} from '../../hooks/AppContext';
import ColorPicker from '../colorPicker/ColorPicker';

const Block = styled.View`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 12px;
  padding-bottom: 32px;
`;

const InsertForm = styled.View`
  flex-direction: row;
  background-color: #eeeeee;
  padding: 10px;
  padding-bottom: 40px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const ProductNameTextInput = styled.TextInput`
  flex: 3;
  background-color: #fafafa;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 14px;
  font-weight: bold;
`;

const QuantityTextInput = styled.TextInput`
  flex: 2;
  background-color: #fafafa;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 4px;
  margin-right: 6px;
  font-size: 14px;
  font-weight: bold;
`;

const ConfirmTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  border-radius: 18px;
  background-color: #087f23;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const AddTouchableOpacity = styled.TouchableOpacity`
  background-color: #38d9a9;
  width: 54px;
  height: 54px;
  border-radius: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 8px;
  align-self: center;
  elevation: 2;
  ${props =>
    props.memoInputOpen &&
    css`
      transform: rotate(45deg);
      background-color: #ff6b6b;
    `}
`;

const ColorTouchableOpacity = styled.TouchableOpacity`
  border: #e2e2e2;
  width: 32px;
  height: 32px;
  border-radius: 15px;
  position: absolute;
  right: 102px;
  bottom: 16px;
  align-items: center;
  justify-content: center;
  align-self: center;
  elevation: 2;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const AddText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const InsertCreate = props => {
  const [memoInputOpen, setMemoInputOpen] = useState(false);
  const [colorSelectOpen, setColorSelectOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useCheckDispatch();
  const nextId = useCheckNextId();

  const onToggle = () => {
    setColorSelectOpen(false);
    setProductName('');
    setAmount('');
    setMemoInputOpen(!memoInputOpen);
  };
  const onSubmit = () => {
    dispatch({
      type: 'CREATE',
      list: {
        id: nextId.current,
        key: Math.random().toString(30).substr(2, 11),
        productName: productName,
        amount: amount,
        checkValue: false,
      },
    });
    setProductName('');
    setAmount('');
    setMemoInputOpen(false);
    nextId.current += 1;
  };
  const onColorPickToggle = () => {
    setMemoInputOpen(false);
    setColorSelectOpen(!colorSelectOpen);
  };

  return (
    <>
      {memoInputOpen && (
        <Block>
          <InsertForm>
            <ProductNameTextInput
              placeholder="물품"
              onChangeText={text => setProductName(text)}
              value={productName}
            />
            <QuantityTextInput
              placeholder="수량"
              onChangeText={text => setAmount(text)}
              value={amount}
            />
            <ConfirmTouchableOpacity onPress={onSubmit}>
              <Icon name="arrow-up" size={30} color="#fff" />
            </ConfirmTouchableOpacity>
          </InsertForm>
        </Block>
      )}
      {colorSelectOpen && (
        <ColorPicker
          currentColor={props.backgroundColor}
          onColorPick={props.onColorPick}
        />
      )}
      <AddTouchableOpacity onPress={onToggle} open={memoInputOpen}>
        <AddText>+</AddText>
      </AddTouchableOpacity>
      <ColorTouchableOpacity
        onPress={onColorPickToggle}
        backgroundColor={props.backgroundColor}>
        <Icon name="color-palette-outline" size={20} color={props.fontColor} />
      </ColorTouchableOpacity>
    </>
  );
};

export default InsertCreate;
