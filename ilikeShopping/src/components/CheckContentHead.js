import React, {useState} from 'react';
import {Text} from 'react-native';
import {useCheckState} from '../modules/AppContext';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckContentBlock = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  justify-content: space-between;
  padding-right: 5px;
  padding-bottom: 6px;
`;

const ViewTitleBlock = styled.View`
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

const UpdateBlock = styled.TouchableOpacity`
  align-items: flex-end;
`;

const CheckContentHead = ({backPage, navigation, dispatch}) => {
  const checks = useCheckState();

  return (
    <CheckContentBlock>
      <Icon name="arrow-back-outline" size={28} onPress={backPage} />
      <ViewTitleBlock>
        <Text>Title</Text>
        <Text>CreateDate</Text>
      </ViewTitleBlock>
      <UpdateBlock>
        <Icon name="ellipsis-horizontal-circle-outline" size={28} />
      </UpdateBlock>
    </CheckContentBlock>
  );
};

export default CheckContentHead;
