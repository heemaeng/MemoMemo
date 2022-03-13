import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import {getDBConnection} from '../../api/dbService/dbConnection';
import {updateMemoItems} from '../../api/dbService/memoDBService';
import {updateMemoItemItems} from '../../api/dbService/memoItemDBService';
import {useCheckDispatch, useCheckState} from '../../hooks/AppContext';

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
  flex-wrap: wrap;
  color: #000;
`;
const ButtonContainer = styled.Pressable`
  padding: 6px;
  margin: 12px;
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
      onPress={() => props.onUpdate(!props.modalVisible)}>
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

const UpdateAlert = props => {
  const checks = useCheckState();
  const dispatch = useCheckDispatch();
  const onUpdate = async () => {
    if (!props.title.trim()) {
      props.setModalVisible(!props.modalVisible);
      return props.setWarnModalVisible(!props.warnModalVisible);
    }
    if (checks.length <= 0) {
      props.setModalVisible(!props.modalVisible);
      return props.setWarnItemModalVisible(!props.warnItemModalVisible);
    }
    try {
      const db = await getDBConnection();
      const memoKey = props.memoKey;
      await updateMemoItemItems(db, checks, props.memoCode);
      await updateMemoItems(
        memoKey,
        db,
        props.backgroundColor,
        props.fontColor,
        props.title,
      );
      props.setModalVisible(!props.modalVisible);
      dispatch({type: 'REMOVE_ALL'});
      return props.navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <Overlay>
        <ModalView>
          <ContentView>
            <SubText>Do you want to modify the memo?</SubText>
          </ContentView>
          <ConfirmView>
            <CancelButton
              label="No"
              modalVisible={props.modalVisible}
              setModalVisible={props.setModalVisible}
            />
            <ConfirmButton label="Yes" onUpdate={onUpdate} />
          </ConfirmView>
        </ModalView>
      </Overlay>
    </Modal>
  );
};

export default UpdateAlert;
