import React, {useState, useEffect, useCallback} from 'react';
import {useColorScheme} from 'react-native';
import styled from 'styled-components/native';
import HomeList from '../components/home/HomeList';
import HomeHead from '../components/home/HomeHead';
import {getDBConnection} from '../api/dbService/dbConnection';
import {createMemoTable, getMemoItems} from '../api/dbService/memoDBService';
import {
  createMemoItemTable,
  getMemoItemItems,
  getMemoItemCheck,
} from '../api/dbService/memoItemDBService';
import {deleteMemoTable} from '../api/dbService/memoDBService';
import {deleteMemoItemTable} from '../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';
import {
  createSearchHistoryTable,
  deleteSearchHistoryTable,
} from '../api/dbService/searchHistoryDBService';
import BottomSheet from '../components/home/BottomSheet';
import HomeModal from '../components/home/Modal';
const Block = styled.View`
  flex: 1;
  padding: 0;
  background-color: #ffffff;
`;

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isFocused = useIsFocused();
  const [memo, setMemo] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const loadDataCallback = useCallback(async () => {
    // const db = await getDBConnection();
    // await deleteMemoTable(db);
    // await deleteMemoItemTable(db);
    // await deleteSearchHistoryTable(db);
    try {
      const initMemo = [];
      const db = await getDBConnection();
      await createMemoTable(db);
      await createMemoItemTable(db);
      await createSearchHistoryTable(db);
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

  const swapButton = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback, isFocused]);

  return (
    <Block>
      <HomeHead navigation={navigation} swapButton={swapButton} />
      <HomeList memo={memo} navigation={navigation} />
      {/* <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <HomeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </Block>
  );
};

export default HomeScreen;
