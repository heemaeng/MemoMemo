import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from 'react-native';
import AddButton from '../components/add-button';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'MemoDatabase.db'});

const Item = item => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.content}>{item.content}</Text>
    <Text style={styles.cdate}>{item.cdate}</Text>
  </View>
);

const HomeScreen = ({navigation}) => {
  const [flatListItems, setFlatListItems] = useState([]);

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Memo'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS Memo', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Memo(memo_name VARCHAR(20), memo_content VARCHAR(255), memo_create_date VARCHAR(10))',
              [],
            );
          }
        },
      );
    });
  };

  const viewAllMemo = () => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Memo',
        [],
        (tx, res) => {
          let len = res.rows.length;
          console.log('rowCount:', len);

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                title: item.memo_name,
                content: item.memo_content,
                cdate: item.memo_create_date,
              });
            }
            console.log(results);
            setFlatListItems(results);
          }
        },
        error => {
          console.log('error on getting Memo ' + error.message);
        },
      );
    });
  };

  const onAdd = () => {
    navigation.navigate('Modal');
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        <Text>{item.cdate}</Text>
      </View>
    );
  };

  useEffect(() => {
    (async () => {
      createTable();
      viewAllMemo();
    })();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={flatListItems}
          renderItem={renderItem}
          key={cat => cat.id}
        />
        <AddButton onAdd={onAdd} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcfcfc',
  },
  item: {
    backgroundColor: '#aed581',
    borderRadius: 20,
    padding: 15,
    marginVertical: 4,
  },
});

export default HomeScreen;
