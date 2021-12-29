import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCheckDispatch, useCheckNextId} from '../modules/AppContext';

const CircleButton = styled.TouchableOpacity`
  background-color: #38d9a9;
  width: 54px;
  height: 54px;
  border-radius: 40px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 8px;
  align-self: center;
  ${props =>
    props.open &&
    css`
      background-color: #ff6b6b;
    `}
`;

const InsideText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const InsertFormPositioner = styled.View`
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 16px;
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

const Input = styled.TextInput`
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

const InputCount = styled.TextInput`
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

const FormButton = styled.TouchableOpacity`
  flex: 1;
  border-radius: 18px;
  background-color: #087f23;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const ListCreate = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [count, setCount] = useState('');

  const dispatch = useCheckDispatch();
  const nextId = useCheckNextId();

  const onToggle = () => setOpen(!open);
  const onSubmit = () => {
    dispatch({
      type: 'CREATE',
      // AppContext.js: CREATE action.list
      list: {
        key: Math.random().toString(30).substr(2, 11),
        id: nextId.current,
        title: title,
        count: count,
        done: false,
      },
    });
    setTitle('');
    setCount('');
    setOpen(false);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              placeholder="물품"
              onChangeText={text => setTitle(text)}
              value={title}
            />
            <InputCount
              placeholder="수량"
              onChangeText={text => setCount(text)}
              value={count}
            />
            <FormButton onPress={onSubmit}>
              <Icon name="arrow-up" size={30} color="#fff" />
            </FormButton>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onPress={onToggle} open={open}>
        <InsideText>+</InsideText>
      </CircleButton>
    </>
  );
};

export default ListCreate;
