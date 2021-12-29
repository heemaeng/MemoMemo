import React from 'react';
import styled, {css} from 'styled-components/native';
import {useCheckDispatch} from '../modules/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckItemBlock = styled.View`
  border-bottom-color: #bbb;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TitleText = styled.Text`
  flex: 5;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 6px;
`;

const CountText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000222;
  margin-right: 10px;
`;

const Circle = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 15px;
  border-color: #ced4da;
  border-width: 2px;
  margin-right: 10px;
  ${props =>
    props.done &&
    css`
      border-color: #bdc192;
      border-width: 3px;
    `}
`;

const Remove = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

const CheckItem = ({id, done, title, count}) => {
  const dispatch = useCheckDispatch();
  const onToggle = () => dispatch({type: 'TOGGLE', id});
  const onRemove = () => dispatch({type: 'REMOVE', id});

  return (
    <CheckItemBlock>
      <Circle onPress={onToggle}>
        {done && <Icon name="checkmark" size={20} color="#087f23" />}
      </Circle>
      <TitleText done={done}>{title}</TitleText>
      <CountText done={done}>{count}</CountText>
      <Remove onPress={onRemove}>
        <Icon name="trash" size={20} color="#dd2c00" />
      </Remove>
    </CheckItemBlock>
  );
};

export default CheckItem;
