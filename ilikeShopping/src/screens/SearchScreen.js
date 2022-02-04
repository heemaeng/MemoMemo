import React, {useCallback, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {getDBConnection} from '../api/dbService/dbConnection';
import {
  getMemoItems,
  getSearchResultItems,
} from '../api/dbService/memoDBService';
import {
  deleteSearchHistoryItem,
  getSearchHistoryItems,
  saveSearchHistoryItems,
} from '../api/dbService/searchHistoryDBService';
import SearchHead from '../components/search/SearchHead';
import SearchHistoryList from '../components/search/SearchHistoryList';
import SearchResultList from '../components/search/SearchResultList';
import SearchTemplate from '../components/search/SearchTemplate';

const ScreenSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const SearchScreen = ({navigation}) => {
  const [searchHistoryItem, setSearchHistoryItem] = useState([]);
  const [searchResultItem, setSearchResultItem] = useState([]);
  const [searchHistoryShow, setSearchHistoryShow] = useState(true);

  const loadSearchDataCallback = useCallback(async () => {
    try {
      const initSearchHistoryItem = [];
      const db = await getDBConnection();
      const storedSearchHistoryItems = await getSearchHistoryItems(db);
      if (storedSearchHistoryItems.length) {
        setSearchHistoryItem(storedSearchHistoryItems);
      } else {
        setSearchHistoryItem(initSearchHistoryItem);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadMemoDataCallback = useCallback(async textValue => {
    try {
      const initSearchResultItem = [];
      const db = await getDBConnection();
      const storedSearchResultItems = await getSearchResultItems(db, textValue);
      if (storedSearchResultItems.length) {
        setSearchResultItem(storedSearchResultItems);
      } else {
        setSearchResultItem(initSearchResultItem);
      }
      setSearchHistoryShow(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const saveSearchHistoryData = async searchWord => {
    try {
      const db = await getDBConnection();
      await saveSearchHistoryItems(db, searchWord);
    } catch (error) {
      console.error(error);
    }
  };

  const searchHistoryComponentShow = () => {
    setSearchHistoryShow(true);
  };

  const deleteSearchHistoryData = async itemKey => {
    try {
      const db = await getDBConnection();
      await deleteSearchHistoryItem(db, itemKey);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSearchDataCallback();
  }, [loadSearchDataCallback]);

  return (
    <ScreenSafeAreaView>
      <SearchTemplate>
        <SearchHead
          backPage={() => navigation.navigate('Home')}
          loadSearchDataCallback={loadSearchDataCallback}
          saveSearchHistoryData={saveSearchHistoryData}
          loadMemoDataCallback={loadMemoDataCallback}
          searchHistoryComponentShow={searchHistoryComponentShow}
        />
        {searchHistoryShow ? (
          <SearchHistoryList
            searchHistoryItem={searchHistoryItem}
            deleteSearchHistoryData={deleteSearchHistoryData}
            loadSearchDataCallback={loadSearchDataCallback}
          />
        ) : (
          <SearchResultList
            searchResultItem={searchResultItem}
            navigation={navigation}
          />
        )}
      </SearchTemplate>
    </ScreenSafeAreaView>
  );
};

export default SearchScreen;
