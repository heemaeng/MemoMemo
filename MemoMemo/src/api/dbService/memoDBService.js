import {enablePromise} from 'react-native-sqlite-storage';
import moment from 'moment';
import 'moment/locale/ko';

const tablename = 'Memo';

enablePromise(true);

export const createMemoTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) PRIMARY KEY, memoCode VARCHAR(150), backgroundColor VARCHAR(10), fontColor VARCHAR(10), title VARCAHR(150), createDate VARCAHR(150));`;
  await db.executeSql(query);
};

export const deleteMemoTable = async db => {
  const query = `DROP TABLE ${tablename}`;
  await db.executeSql(query);
};

export const getMemoItems = async db => {
  try {
    const memoItems = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tablename} ORDER BY createDate DESC`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        memoItems.push(result.rows.item(index));
      }
    });
    return memoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get MemoItems');
  }
};

export const getSearchResultItems = async (db, textValue) => {
  try {
    const memoItems = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tablename} WHERE title LIKE '%${textValue}%' ORDER BY createDate DESC`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        memoItems.push(result.rows.item(index));
      }
    });
    return memoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get MemoItems');
  }
};

export const saveMemoItems = async (
  key,
  db,
  backgroundColor,
  fontColor,
  title,
  memoCode,
) => {
  const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, memoCode, backgroundColor, fontColor, title, createDate) values` +
    `('${key}', '${memoCode}', '${backgroundColor}', '${fontColor}',  '${title.replace(
      /'/g,
      "''",
    )}', '${currentDate}')`;
  return db.executeSql(insertQuery);
};

export const updateMemoItems = async (
  key,
  db,
  backgroundColor,
  fontColor,
  title,
) => {
  const insertQuery = `UPDATE ${tablename} SET backgroundColor='${backgroundColor}', fontColor='${fontColor}', title='${title.replace(
    /'/g,
    "''",
  )}' WHERE key='${key}'`;
  return db.executeSql(insertQuery);
};

export const deleteMemoItem = async (db, key) => {
  const deleteQuery = `DELETE FROM ${tablename} WHERE key = '${key}'`;
  await db.executeSql(deleteQuery);
};
