import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

const CheckContentList = () => {
  const [flatListItems, setFlatListItems] = useState([]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View></View>
      </View>
    );
  };

  const viewContent = () => {
    db.transaction(txn => {
      txn.executeSql('SELECT * FROM MemoItem', [], (txn, res) => {
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
      });
    });
  };

  return (
    <View>
      <FlatList
        data={flatListItems}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CheckContentList;
