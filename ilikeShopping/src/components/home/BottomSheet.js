import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Background = styled.View`
  flex: 1;
`;

const Head = styled.View`
  background-color: #111222;
  flex-direction: row;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const HeadTitle = styled.Text`
  padding: 10px;
`;
const CloseIcon = styled.TouchableOpacity`
  align-self: center;
`;

const Content = styled.View`
  background-color: #fff;
`;

const CheckBox = styled.View``;

const CheckIcon = styled.TouchableOpacity``;

const CheckBoxText = styled.Text``;

const SortContent = styled.View``;

const SortCheckBox = styled.View``;

const SortCheckIcon = styled.TouchableOpacity``;

const SortCheckBoxText = styled.Text``;

const BottomSheet = props => {
  const {modalVisible, setModalVisible} = props;
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (props.modalVisible) {
      resetBottomSheet.start();
    }
  }, [props.modalVisible, resetBottomSheet]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <Overlay>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Background />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <Head>
            <HeadTitle>정렬</HeadTitle>
            <CloseIcon>
              <Icon name="close" size={25} />
            </CloseIcon>
          </Head>
          <Content>
            <CheckBox>
              <CheckIcon></CheckIcon>
              <CheckBoxText></CheckBoxText>
            </CheckBox>
            <CheckBox>
              <CheckIcon></CheckIcon>
              <CheckBoxText></CheckBoxText>
            </CheckBox>
          </Content>
          <SortContent>
            <SortCheckBox>
              <SortCheckIcon></SortCheckIcon>
              <SortCheckBoxText></SortCheckBoxText>
            </SortCheckBox>
            <SortCheckBox>
              <SortCheckIcon></SortCheckIcon>
              <SortCheckBoxText></SortCheckBoxText>
            </SortCheckBox>
          </SortContent>
        </Animated.View>
      </Overlay>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default BottomSheet;
