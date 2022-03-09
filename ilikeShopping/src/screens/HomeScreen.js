import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import HomeList from '../components/home/HomeList';
import HomeHead from '../components/home/HomeHead';
import {getDBConnection} from '../api/dbService/dbConnection';
import {
  createMemoTable,
  getMemoItems,
  deleteMemoTable,
} from '../api/dbService/memoDBService';
import {
  createMemoItemTable,
  getMemoItemItems,
  getMemoItemCheck,
  deleteMemoItemTable,
} from '../api/dbService/memoItemDBService';
import {useIsFocused} from '@react-navigation/native';
import {
  createSearchHistoryTable,
  deleteSearchHistoryTable,
} from '../api/dbService/searchHistoryDBService';
import HomeModal from '../components/home/HomeModal';
import HomeTemplate from '../components/home/HomeTemplate';
import HomeButton from '../components/home/HomeButton';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [memo, setMemo] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectVisible, setSelectVisible] = useState(false);
  const [selectMemoCount, setSelectMemoCount] = useState(0);
  const [memoAllCheck, setMemoAllCheck] = useState(false);
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
  const sendButton = () => {
    setSelectVisible(true);
  };
  const cancelButton = () => {
    setSelectVisible(false);
  };
  const allCheck = () => {
    setMemoAllCheck(!memoAllCheck);
    if (!memoAllCheck) {
      console.log('memoAllCheck : True');
    }
  };
  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback, isFocused]);
  return (
    <HomeTemplate>
      {selectVisible ? (
        <StatusBar barStyle="" backgroundColor="#20232a" />
      ) : (
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
          translucent={false}
          networkActivityIndicatorVisible
        />
      )}
      <HomeHead
        navigation={navigation}
        swapButton={swapButton}
        sendButton={sendButton}
        cancelButton={cancelButton}
        selectMode={selectVisible}
        selectMemoCount={selectMemoCount}
        setSelectMemoCount={setSelectMemoCount}
        allCheck={allCheck}
        memoAllCheck={memoAllCheck}
        setMemoAllCheck={setMemoAllCheck}
      />
      <HomeList
        memo={memo}
        navigation={navigation}
        selectMode={selectVisible}
        memoAllCheck={memoAllCheck}
      />
      <HomeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <HomeButton navigation={navigation} />
    </HomeTemplate>
  );
};

export default HomeScreen;
