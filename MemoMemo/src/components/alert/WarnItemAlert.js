import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

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
const ConfirmView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const TextStyle = styled.Text`
  color: #000000;
`;
const ContentView = styled.View`
  padding: 18px 18px 0 18px;
  align-items: center;
`;
const SubText = styled.Text`
  font-size: 16px;
  color: #000;
`;
const ButtonContainer = styled.Pressable`
  padding: 6px;
  margin: 12px;
`;

const CancelButton = props => {
  return (
    <ButtonContainer
      style={({pressed}) => [
        {
          borderRadius: 5,
          backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
        },
      ]}
      onPress={() => props.setModalVisible(!props.modalVisible)}>
      <TextStyle>{props.label}</TextStyle>
    </ButtonContainer>
  );
};

const WarnItemAlert = props => {
  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <Overlay>
        <ModalView>
          <ContentView>
            <SubText>{props.subText}</SubText>
          </ContentView>
          <ConfirmView>
            <CancelButton
              label="Cancel"
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
          </ConfirmView>
        </ModalView>
      </Overlay>
    </Modal>
  );
};

export default WarnItemAlert;
