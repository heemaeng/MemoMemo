import React from 'react';
import styled, {css} from 'styled-components/native';
import {
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  Pressable,
  Share,
} from 'react-native';
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
  /* width: 100px; */
  background-color: white;
  border-radius: 10px;
  elevation: 4;
  padding: 0;
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
      padding-top: 10px;
    `}
  ${props =>
    props.viewChild === 'last' &&
    css`
      padding-bottom: 10px;
      border-bottom-width: 0px;
    `}
`;
const ContentText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  margin-right: 4px;
`;

const DetailModal = props => {
  const statusBarHeight =
    // Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;
    StatusBar.currentHeight;
  // const SMSDivider = Platform.OS === 'android' ? '?' : '&';

  return (
    <Modal
      visible={props.modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <TouchableWithoutFeedback
        onPress={() => {
          props.setModalVisible(false);
        }}>
        <Overlay />
      </TouchableWithoutFeedback>
      <ModalView viewHeight={statusBarHeight + props.viewHeight}>
        <Pressable
          onPress={async () => {
            try {
              var memoItemText = '';
              props.setModalVisible(false);
              if (props.memoItem.length > 0) {
                for (let i = 0; i < props.memoItem.length; i++) {
                  if (props.memoItem[i].bookMark) {
                    if (props.memoItem[i].checkValue) {
                      memoItemText +=
                        ' - ' +
                        '*' +
                        '[v] ' +
                        props.memoItem[i].productName +
                        '\n';
                    } else {
                      memoItemText +=
                        ' - ' + '*' + props.memoItem[i].productName + '\n';
                    }
                  } else {
                    if (props.memoItem[i].checkValue) {
                      memoItemText +=
                        ' - ' + '[v] ' + props.memoItem[i].productName + '\n';
                    } else {
                      memoItemText +=
                        ' - ' + props.memoItem[i].productName + '\n';
                    }
                  }
                }
              }
              const result = await Share.share({
                message: props.memoTitle + "'s memo" + '\n' + memoItemText,
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              console.error(error);
            }
          }}
          style={({pressed}) => [
            {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
            },
          ]}>
          <ContentView viewChild="first">
            <ContentText>Share</ContentText>
            <FeatherIcon name="send" color={'#000000'} size={20} />
          </ContentView>
        </Pressable>
        <Pressable
          onPress={() => {
            props.setModalVisible(false);
            props.updatePage();
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
            },
          ]}>
          <ContentView>
            <ContentText>Update</ContentText>
            <FeatherIcon name="edit" color={'#000000'} size={20} />
          </ContentView>
        </Pressable>
        <Pressable
          onPress={() => props.setDeleteModalVisible(true)}
          style={({pressed}) => [
            {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
            },
          ]}>
          <ContentView viewChild="last">
            <ContentText>Delete</ContentText>
            <MaterialCommunityIconsIcon
              name="delete-outline"
              color={'#000000'}
              size={23}
            />
          </ContentView>
        </Pressable>
      </ModalView>
    </Modal>
  );
};

export default DetailModal;
