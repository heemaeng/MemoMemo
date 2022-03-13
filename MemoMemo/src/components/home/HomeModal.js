import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {css} from 'styled-components';

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 50px 0 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalView = styled.View`
  background-color: white;
  border-radius: 5px;
  elevation: 5;
`;

const HeadView = styled.View`
  padding: 20px 20px 10px 20px;
`;
const OptionView = styled.View`
  ${props =>
    props.borderColor &&
    css`
      border-top-width: 1px;
      border-top-color: rgba(0, 0, 0, 0.2);
    `}
`;

const ConfirmView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Item = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
  align-items: center;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
const TextStyle = styled.Text`
  color: #000000;
`;

const ModalText = styled.Text`
  color: #000000;
  padding: 10px;
`;

const ButtonContainer = styled.Pressable`
  padding: 20px;
`;

const Option = styled.Pressable`
  padding: 10px 10px 10px 0;
`;

const RadioOption = () => {
  return (
    <Option onPress={() => console.log('option')}>
      <Icon name="radio-button-off-outline" size={20} color={'#000'} />
    </Option>
  );
};

const OptionItem = props => {
  return (
    <Item>
      <RadioOption />
      <ModalText>{props.label}</ModalText>
    </Item>
  );
};

const ConfirmButton = props => {
  return (
    <ButtonContainer onPress={() => props.setModalVisible(!props.modalVisible)}>
      <TextStyle>{props.label}</TextStyle>
    </ButtonContainer>
  );
};

const CancelButton = props => {
  return (
    <ButtonContainer onPress={() => props.setModalVisible(!props.modalVisible)}>
      <TextStyle>{props.label}</TextStyle>
    </ButtonContainer>
  );
};

const HomeModal = props => {
  const [timeSelect, setTimeSelect] = useState(false);
  const [nameSelect, setNameSelect] = useState(false);
  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <Overlay>
        <ModalView>
          <HeadView>
            <TitleText>Range</TitleText>
          </HeadView>
          <OptionView>
            <OptionItem label="Time" />
            <OptionItem label="Name" />
          </OptionView>
          <OptionView borderColor="#000">
            <OptionItem label="Ascending (A -> Z)" />
            <OptionItem label="Descending (Z -> A)" />
          </OptionView>
          <ConfirmView>
            <CancelButton
              label="No"
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
            <ConfirmButton label="Yes" />
          </ConfirmView>
        </ModalView>
      </Overlay>
    </Modal>
  );
};

export default HomeModal;
