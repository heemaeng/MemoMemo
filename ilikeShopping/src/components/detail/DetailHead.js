import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding-right: 5px;
  padding-bottom: 6px;
`;

const TitleBlock = styled.View`
  padding: 0;
  background-color: #fff;
  flex: 1;
  margin-left: 7px;
  margin-right: 7px;
  padding-bottom: 0px;
  font-size: 14px;
  font-weight: bold;
  color: #000222;
`;

const TitleText = styled.Text``;

const CreateDateText = styled.Text``;

const OptionMenuTouchableOpacity = styled.TouchableOpacity`
  align-items: flex-end;
`;

const DetailHead = ({backPage, ...props}) => {
  return (
    <Block>
      <Icon name="arrow-back-outline" size={28} onPress={backPage} />
      <TitleBlock>
        <TitleText>{props.title}</TitleText>
        <CreateDateText>{props.createDate}</CreateDateText>
      </TitleBlock>
      <OptionMenuTouchableOpacity>
        <Icon name="ellipsis-horizontal-circle-outline" size={28} />
      </OptionMenuTouchableOpacity>
    </Block>
  );
};

export default DetailHead;
