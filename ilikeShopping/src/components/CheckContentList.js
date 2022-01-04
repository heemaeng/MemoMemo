import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import CheckContentItem from './CheckContentItem';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

const CheckContentListBlock = styled.View`
  flex: 1;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 10px;
  padding-top: 16px;
`;

const CheckContentList = param => {
  const [flatListItems, setFlatListItems] = useState([]);
  console.log(param.memoCode);
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM MemoItem WHERE memoCode = ?',
      [param.memoCode],
      (txn, res) => {
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({
              key: item.key,
              memoCode: item.memoCode,
              title: item.title,
              content: item.content,
            });
          }
          setFlatListItems(results);
        }
      },
    );
  });
  const renderItem = ({item}) => {
    return (
      <CheckContentItem
        key={item.key}
        id={item.id}
        title={item.title}
        count={item.content}
        done={item.check}
      />
    );
  };

  return (
    <CheckContentListBlock>
      <FlatList
        data={flatListItems}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CheckContentListBlock>
  );
};

export default CheckContentList;
