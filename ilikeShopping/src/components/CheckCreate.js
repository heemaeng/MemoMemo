import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CircleButton = styled.TouchableOpacity`
  background-color: #38d9a9;
  z-index: 5;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  /* tranform: translate(-50%, 50%); */
  color: white;
  border-radius: 40px;
  border: none;
  /* outline: none; */
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.open &&
    css`
      background-color: #ff6b6b;
      transform: rotate(45deg);
    `}/* transition: 0.125s all ease-in; */
`;

const InsertFormPositioner = styled.View`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.View`
  background-color: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-width: 1px;
`;

const Input = styled.TextInput`
  padding: 12px;
  border-radius: 4px;
  border-width: 1px;
  width: 100%;
  /* outline: none; */
  font-size: 18px;
  /* box-sizing: border-box; */
`;

const ListCreate = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onPress={onToggle} open={open}>
        <Icon name="add" size={70} />
      </CircleButton>
    </>
  );
};

export default ListCreate;
