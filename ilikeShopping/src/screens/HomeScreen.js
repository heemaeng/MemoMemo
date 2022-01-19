import React, {useState, useEffect, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import HomeList from '../components/home/HomeList';
import Search from '../components/home/Search';
import {getDBConnection} from '../api/dbService/dbConnection';
import {createMemoTable, getMemoItems} from '../api/dbService/memoDBService';
import {createMemoItemTable} from '../api/dbService/memoItemDBService';
// import {deleteMemoItem} from '../api/dbService/memoDBService';
// import {deleteMemoItemItem} from '../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';

const Block = styled.View`
  flex: 1;
  padding: 0;
  background-color: #fafafa;
`;

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isFocused = useIsFocused();
  const [memo, setMemo] = useState([]);
  const loadDataCallback = useCallback(async () => {
    try {
      const initMemo = [];
      const db = await getDBConnection();
      await createMemoTable(db);
      await createMemoItemTable(db);
      const storedMemoItems = await getMemoItems(db);
      if (storedMemoItems.length) {
        setMemo(storedMemoItems);
      } else {
        setMemo(initMemo);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback, isFocused]);

  return (
    <Block>
      <Search />
      <HomeList memo={memo} navigation={navigation} />
    </Block>
  );
};

export default HomeScreen;
