import {enablePromise} from 'react-native-sqlite-storage';
import moment from 'moment';
import 'moment/locale/ko';

const tablename = 'SearchHistory';

enablePromise(true);

export const createSearchHistoryTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) UNIQUE, searchWord VARCAHR(150), createDate VARCHAR(10));`;
  await db.executeSql(query);
};

export const deleteSearchHistoryTable = async db => {
  const query = `DROP TABLE ${tablename}`;
  await db.executeSql(query);
};

export const getSearchHistoryItems = async db => {
  try {
    const searchItems = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tablename} ORDER BY createDate DESC`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        searchItems.push(result.rows.item(index));
      }
    });
    return searchItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get SearchItems');
  }
};

export const saveSearchHistoryItems = async (db, searchWord) => {
  const key = Math.random().toString(30).substr(2, 11);
  const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, searchWord, createDate) values` +
    `('${key}', '${searchWord.replace(/'/g, "''")}', '${currentDate}')`;
  return db.executeSql(insertQuery);
};

export const deleteSearchHistoryItem = async (db, key) => {
  const deleteQuery = `DELETE FROM ${tablename} WHERE key = '${key}'`;
  await db.executeSql(deleteQuery);
};
