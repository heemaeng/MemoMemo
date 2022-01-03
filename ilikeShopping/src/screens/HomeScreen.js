import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/Ionicons';

var db = openDatabase({name: 'MemoDatabase.db'});

const HomeScreen = ({navigation}) => {
  const [flatListItems, setFlatListItems] = useState([]);

  const createMemoTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Memo'",
        [],
        (tx, res) => {
          // console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS Memo', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Memo(key VARCHAR(150) NOT NULL, memoCode VARCHAR(150), title VARCAHR(150), createDate VARCHAR(10))',
              [],
            );
          }
        },
      );
    });
  };

  const createMemoItemTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='MemoItem'",
        [],
        (tx, res) => {
          // console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS Memo', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS MemoItem(key VARCHAR(150) NOT NULL, memoCode VARCHAR(150), title VARCAHR(150), content VARCHAR(10))',
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

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                key: item.key,
                title: item.title,
                cdate: item.memo_create_date,
              });
            }
            setFlatListItems(results);
          }
        },
        error => {
          console.log('error on getting Memo ' + error.message);
        },
      );
    });
  };

  const viewContent = key => {
    console.log(key);
    navigation.navigate('Content', {paramKey: key});
  };

  const renderItem = ({item, index}) => {
    if (index === 0) {
      return (
        // [onPress binding with an argument]
        // https://stackoverflow.com/questions/43017807/react-native-onpress-binding-with-an-argument
        <TouchableOpacity onPress={() => viewContent(item.key)}>
          <View style={styles.firstItem}>
            <View style={styles.leftItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.cdate}>{item.cdate}</Text>
            </View>
            <View style={styles.rightItem}>
              <Icon name="ellipsis-vertical" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => viewContent(item.key)}>
          <View style={styles.item}>
            <View style={styles.leftItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.cdate}>{item.cdate}</Text>
            </View>
            <View style={styles.rightItem}>
              <Icon name="ellipsis-vertical" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    (async () => {
      createMemoTable();
      viewAllMemo();
      createMemoItemTable();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#e2e2e2',
          padding: 15,
        }}>
        <View
          style={{
            backgroundColor: '#9e9e9e',
            paddingHorizontal: 5,
            paddingVertical: 0,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="search" size={20} />
          <TextInput style={{width: '90%', padding: 0}} placeholder="검색" />
        </View>
      </View>
      <FlatList
        data={flatListItems}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {/* <AddButton onAdd={onAdd} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fafafa',
  },
  firstItem: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#9e9e9e',
  },
  leftItem: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  rightItem: {
    backgroundColor: '#fafafa',
    alignItems: 'flex-end',
  },
  title: {
    color: '#212121',
    fontSize: 16,
  },
  cdate: {
    color: '#9e9e9e',
    fontSize: 14,
  },
});

export default HomeScreen;
