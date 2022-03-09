import React from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCheckDispatch} from '../../hooks/AppContext';

const Block = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding: 12px;
  padding-bottom: 9px;
  margin-bottom: 9px;
`;

const FirstBlock = styled.View`
  flex-direction: row;
  align-items: flex-start;
  background-color: transparent;
  justify-content: space-between;
`;

const BackPageTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-start;
  margin-right: 12px;
`;

const TitleTextInput = styled.TextInput`
  padding: 0;
  flex: 1;
  font-size: 20px;
  font-weight: 700;
  color: #000222;
  padding-right: 12px;
  border-bottom-width: 1px;

  ${props =>
    props.fontColor &&
    css`
      border-color: ${props.fontColor};
      color: ${props.fontColor};
    `}
`;

const ConfirmTouchableOpacity = styled.TouchableOpacity`
  font-weight: bold;
  align-self: center;
  margin-left: 12px;
`;

const InsertHead = props => {
  const dispatch = useCheckDispatch();
  const backPage = () => {
    dispatch({type: 'REMOVE_ALL'});
    props.navigation.navigate('Home');
  };
  return (
    <Block>
      <FirstBlock>
        <BackPageTouchableOpacity onPress={backPage}>
          <Icon name="close" size={28} color={props.fontColor} />
        </BackPageTouchableOpacity>
        <TitleTextInput
          placeholder="Title"
          placeholderTextColor="#999"
          fontColor={props.fontColor}
          onChangeText={text => props.setTitle(text)}
          value={props.title}
        />
        <ConfirmTouchableOpacity onPress={props.onInsertModal}>
          <Icon
            name="checkmark-circle-outline"
            size={28}
            color={props.fontColor}
          />
        </ConfirmTouchableOpacity>
      </FirstBlock>
    </Block>
  );
};

export default InsertHead;
