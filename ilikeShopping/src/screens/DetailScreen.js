import React, {useState, useEffect, useCallback} from 'react';
import DetailTemplate from '../components/detail/DetailTemplate';
import DetailHead from '../components/detail/DetailHead';
import DetailList from '../components/detail/DetailList';
import DetailBottom from '../components/detail/DetailBottom';
import styled from 'styled-components/native';
import {useColorScheme} from 'react-native';
import {getDBConnection} from '../api/dbService/dbConnection';
import {
  createMemoItemTable,
  getMemoItemItems,
  saveMemoItemItems,
  getMemoItemCheck,
} from '../api/dbService/memoItemDBService';

const ScreenSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const DetailScreen = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [memoItem, setMemoItem] = useState([]);
  const [memoItemCount, setMemoItemCount] = useState(0);
  const [memoItemCheckCount, setMemoItemCheckCount] = useState(0);

  const loadDataCallback = useCallback(async () => {
    try {
      const initMemoItem = [];
      const db = await getDBConnection();
      await createMemoItemTable(db);
      const storedMemoItemItems = await getMemoItemItems(
        db,
        route.params.memoCode,
      );
      if (storedMemoItemItems.length) {
        const storedMemoItemCheck = await getMemoItemCheck(
          db,
          route.params.memoCode,
        );
        setMemoItemCount(storedMemoItemItems.length);
        setMemoItemCheckCount(storedMemoItemCheck.length);
        setMemoItem(storedMemoItemItems);
      } else {
        await saveMemoItemItems(db, initMemoItem);
        setMemoItem(initMemoItem);
      }
    } catch (error) {
      console.error(error);
    }
  }, [route.params.memoCode]);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  const onToggle = () => {
    console.log('onToggle');
  };

  return (
    <ScreenSafeAreaView>
      <DetailTemplate>
        <DetailHead
          backPage={() => navigation.navigate('Home')}
          title={route.params.title}
          createDate={route.params.createDate}
        />
        <DetailList memoItem={memoItem} onToggle={onToggle} />
        <DetailBottom
          memoItemCount={memoItemCount}
          memoItemCheckCount={memoItemCheckCount}
        />
      </DetailTemplate>
    </ScreenSafeAreaView>
  );
};

export default DetailScreen;
