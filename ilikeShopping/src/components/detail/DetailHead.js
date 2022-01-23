import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;

const CreateDateText = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

const OptionMenuTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-start;
`;

const DetailHead = ({backPage, ...props}) => {
  return (
    <Block>
      <FirstBlock>
        <BackPageTouchableOpacity onPress={backPage}>
          <Icon name="arrow-back-outline" size={26} color={'#ffffff'} />
        </BackPageTouchableOpacity>

        <TitleBlock>
          <TitleText>{props.title}</TitleText>
          <CreateDateText>{props.createDate}</CreateDateText>
        </TitleBlock>
        <OptionMenuTouchableOpacity>
          <Icon name="ellipsis-vertical" size={20} color={'#ffffff'} />
        </OptionMenuTouchableOpacity>
      </FirstBlock>
    </Block>
  );
};

export default DetailHead;
