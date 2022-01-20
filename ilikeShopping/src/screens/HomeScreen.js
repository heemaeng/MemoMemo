import React, {useState, useEffect, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import HomeList from '../components/home/HomeList';
import Search from '../components/home/Search';
import {getDBConnection} from '../api/dbService/dbConnection';
import {createMemoTable, getMemoItems} from '../api/dbService/memoDBService';
import {
  createMemoItemTable,
  getMemoItemItems,
  getMemoItemCheck,
} from '../api/dbService/memoItemDBService';
// import {deleteMemoTable} from '../api/dbService/memoDBService';
// import {deleteMemoItemTable} from '../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';

const Block = styled.View`
  flex: 1;
  padding: 0;
  background-color: #ffffff;
`;

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isFocused = useIsFocused();
  const [memo, setMemo] = useState([]);
  const [memoItemCount, setMemoItemCount] = useState(0);
  const [memoItemCheckCount, setMemoItemCheckCount] = useState(0);
  const loadDataCallback = useCallback(async () => {
    // const db = await getDBConnection();
    // await deleteMemoTable(db);
    // await deleteMemoItemTable(db);
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
