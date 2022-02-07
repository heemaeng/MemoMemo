import React from 'react';
import styled, {css} from 'styled-components/native';
import {
  Modal,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
`;
const ModalView = styled.View`
  position: absolute;
  flex: 1;
  right: 12px;
  width: 100px;
  background-color: white;
  border-radius: 5px;
  elevation: 4;
  padding: 10px 0 10px 0;
  ${props =>
    props.viewHeight &&
    css`
      top: ${props.viewHeight}px;
    `}
`;
const ContentView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  ${props =>
    props.viewChild === 'first' &&
    css`
      padding-top: 0px;
    `}
  ${props =>
    props.viewChild === 'last' &&
    css`
      padding-bottom: 0px;
      border-bottom-width: 0px;
    `}
`;
const ContentText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
`;

const DetailModal = props => {
  const statusBarHeight =
    // Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;
    StatusBar.currentHeight;
  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>
        <Overlay />
      </TouchableWithoutFeedback>
      <ModalView viewHeight={12 + statusBarHeight + props.viewHeight}>
        <ContentView viewChild="first">
          <ContentText>보내기</ContentText>
          <FeatherIcon name="send" color={'#000000'} size={20} />
        </ContentView>
        <ContentView>
          <ContentText>수정</ContentText>
          <FeatherIcon name="edit" color={'#000000'} size={20} />
        </ContentView>
        <ContentView viewChild="last">
          <ContentText>삭제</ContentText>
          <MaterialCommunityIconsIcon
            name="delete-outline"
            color={'#000000'}
            size={23}
          />
        </ContentView>
      </ModalView>
    </Modal>
  );
};

export default DetailModal;
