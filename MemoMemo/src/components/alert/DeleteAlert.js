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
const HeadView = styled.View`
  padding: 20px 20px 10px 20px;
`;
const ConfirmView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const TitleText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;
const TextStyle = styled.Text`
  color: #000000;
`;
const ContentView = styled.View`
  padding: 0 20px 0 20px;
`;
const SubText = styled.Text`
  font-size: 16px;
  color: #000;
`;
const WarnText = styled.Text`
  font-size: 13px;
  color: red;
`;
const ButtonContainer = styled.Pressable`
  padding: 6px;
  margin: 14px;
`;

const ConfirmButton = props => {
  return (
    <ButtonContainer
      style={({pressed}) => [
        {
          borderRadius: 5,
          backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
        },
      ]}
      onPress={() => props.onDelete(!props.modalVisible)}>
      <TextStyle>{props.label}</TextStyle>
    </ButtonContainer>
  );
};
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

const DeleteAlert = props => {
  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <Overlay>
        <ModalView>
          <HeadView>
            <TitleText>{props.titleText}</TitleText>
          </HeadView>
          <ContentView>
            <SubText>Do you want to delete the memo?</SubText>
            <WarnText>Memos will be deleted permanently.</WarnText>
          </ContentView>
          <ConfirmView>
            <CancelButton
              label="No"
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
            <ConfirmButton
              label="Yes"
              onDelete={() => {
                props.onDelete(props.memoKey);
              }}
            />
          </ConfirmView>
        </ModalView>
      </Overlay>
    </Modal>
  );
};

export default DeleteAlert;
