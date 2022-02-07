import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailModal from './DetailModal';

const Block = styled.View`
  margin-bottom: 18px;
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
const TitleBlock = styled.View`
  background-color: transparent;
  flex: 1;
  height: 100%;
`;
const TitleText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;
const CreateDateText = styled.Text`
  font-size: 14px;
  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;
const OptionView = styled.View``;
const OptionMenuTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-start;
`;
const DetailHead = ({backPage, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [viewHeight, setViewHeight] = useState(0);
  const modalButton = () => {
    setModalVisible(true);
  };
  return (
    <Block>
      <FirstBlock>
        <BackPageTouchableOpacity onPress={backPage}>
          <Icon name="arrow-back-outline" size={26} color={props.fontColor} />
        </BackPageTouchableOpacity>
        <TitleBlock>
          <TitleText fontColor={props.fontColor}>{props.title}</TitleText>
          <CreateDateText fontColor={props.fontColor}>
            {props.createDate}
          </CreateDateText>
        </TitleBlock>
        <OptionView
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            setViewHeight(Math.round(layout.height));
          }}>
          <OptionMenuTouchableOpacity onPress={modalButton}>
            <Icon name="ellipsis-vertical" size={20} color={props.fontColor} />
          </OptionMenuTouchableOpacity>
        </OptionView>

        <DetailModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          viewHeight={viewHeight}
        />
      </FirstBlock>
    </Block>
  );
};

export default DetailHead;
