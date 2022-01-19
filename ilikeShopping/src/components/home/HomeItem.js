import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemTouchableOpacity = styled.TouchableOpacity``;

const Block = styled.View`
  background-color: #fafafa;
  padding: 8px;
  flex-direction: row;
  border-top-width: 0.5px;
  border-color: #9e9e9e;
`;

const LeftBlock = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const RightBlock = styled.View`
  background-color: #fafafa;
  align-items: flex-end;
`;

const TitleText = styled.Text`
  color: #212121;
  font-size: 16px;
`;

const CreateDateText = styled.Text`
  color: #9e9e9e;
  font-size: 14px;
`;

const HomeItem = props => {
  return (
    <ItemTouchableOpacity
      onPress={() =>
        props.navigation.navigate('Detail', {
          key: props.id,
          memoCode: props.memoCode,
          title: props.title,
          createDate: props.createDate,
        })
      }>
      <Block>
        <LeftBlock>
          <TitleText>{props.title}</TitleText>
          <CreateDateText>{props.createDate}</CreateDateText>
        </LeftBlock>
        <RightBlock>
          <Icon name="ellipsis-vertical" size={20} />
        </RightBlock>
      </Block>
    </ItemTouchableOpacity>
  );
};

export default HomeItem;
