import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDBConnection} from '../../api/dbService/dbConnection';
import {
  getMemoItemItems,
  getMemoItemCheck,
} from '../../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';

const ItemTouchableOpacity = styled.TouchableOpacity``;

const Block = styled.View`
  background-color: tomato;
  padding: 20px;
  flex-direction: row;
  /* border-top-width: 0.5px; */
  border-color: #9e9e9e;
  border-radius: 10px;
`;
const LeftBlock = styled.View`
  flex: 1;
  background-color: transparent;
`;
const TitleText = styled.Text`
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;
const CreateDateText = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;
const RightBlock = styled.View`
  background-color: transparent;
  align-self: center;
`;
const CountText = styled.Text`
  background-color: transparent;
  color: #ffffff;
  font-size: 14px;
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
          <CountText>
            {memoItemCheckCount} /{memoItemCount}
          </CountText>

          {/* <Icon name="ellipsis-vertical" size={20} /> */}
        </RightBlock>
      </Block>
    </ItemTouchableOpacity>
  );
};

export default HomeItem;
