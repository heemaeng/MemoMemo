import React, {useEffect, useState, useCallback} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDBConnection} from '../../api/dbService/dbConnection';
import {
  getMemoItemItems,
  getMemoItemCheck,
} from '../../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';

const ItemTouchableOpacity = styled.TouchableOpacity``;

const Block = styled.View`
  padding: 20px;
  flex-direction: row;
  border-color: #9e9e9e;
  border-radius: 10px;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;
const CautionMark = styled.View`
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: red;
  width: 8px;
  height: 8px;
  border-radius: 4px;
`;
const LeftBlock = styled.View`
  flex: 1;
  background-color: transparent;
`;
const TitleText = styled.Text`
  font-weight: 700;
  font-size: 18px;
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
const RightBlock = styled.View`
  background-color: transparent;
  align-self: center;
`;
const CountText = styled.Text`
  background-color: transparent;
  font-size: 14px;
  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;
const HomeItem = props => {
  const isFocused = useIsFocused();
  const [memoItemCount, setMemoItemCount] = useState(0);
  const [memoItemCheckCount, setMemoItemCheckCount] = useState(0);

  const countDataCallback = useCallback(async () => {
    const db = await getDBConnection();
    const storedMemoItemItems = await getMemoItemItems(db, props.memoCode);
    if (storedMemoItemItems.length) {
      const storedMemoItemCheck = await getMemoItemCheck(db, props.memoCode);
      setMemoItemCount(storedMemoItemItems.length);
      setMemoItemCheckCount(storedMemoItemCheck.length);
    }
  }, [props.memoCode]);

  useEffect(() => {
    countDataCallback();
  }, [countDataCallback, isFocused]);

  return (
    <ItemTouchableOpacity
      onPress={() =>
        props.navigation.navigate('Detail', {
          key: props.id,
          memoCode: props.memoCode,
          backgroundColor: props.backgroundColor,
          fontColor: props.fontColor,
          title: props.title,
          createDate: props.createDate,
        })
      }>
      <Block backgroundColor={props.backgroundColor}>
        {memoItemCheckCount !== memoItemCount && <CautionMark />}
        <LeftBlock>
          <TitleText fontColor={props.fontColor}>{props.title}</TitleText>
          <CreateDateText fontColor={props.fontColor}>
            {props.createDate}
          </CreateDateText>
        </LeftBlock>
        <RightBlock>
          <CountText fontColor={props.fontColor}>
            {memoItemCheckCount} /{memoItemCount}
          </CountText>
        </RightBlock>
      </Block>
    </ItemTouchableOpacity>
  );
};

export default HomeItem;
