import React from 'react';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* margin-top: 22px; */
  background-color: rgba(0, 0, 0, 0.4);
`;

const Overlay = styled.View`
  flex: 1;
  background-color: #e2e2e2;
`;
const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  elevation: 5;
`;

const Button = styled.Pressable`
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`;

const ButtonClose = styled.Pressable`
  background-color: #2196f3;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

const HomeModal = props => {
  const {modalVisible, setModalVisible} = props;
  const closeModal = () => {
    console.log('closeModal');
    setModalVisible(false);
  };
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <CenteredView>
        <ModalView>
          <ModalText>Hello World!</ModalText>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <TextStyle>Hide Modal</TextStyle>
          </Pressable>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
export default HomeModal;
