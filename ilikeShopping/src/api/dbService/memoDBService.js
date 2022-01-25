import {enablePromise} from 'react-native-sqlite-storage';

const tablename = 'Memo';

enablePromise(true);

export const createMemoTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) UNIQUE, memoCode VARCHAR(150), backgroundColor VARCHAR(10), fontColor VARCHAR(10), title VARCAHR(150), createDate VARCHAR(10));`;
  await db.executeSql(query);
};

export const deleteMemoTable = async db => {
  const query = `DROP TABLE ${tablename}`;
  await db.executeSql(query);
};

export const getMemoItems = async db => {
  try {
    const memoItems = [];
    const results = await db.executeSql(`SELECT * FROM ${tablename}`);
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
  db,
  backgroundColor,
  fontColor,
  title,
  memoCode,
) => {
  const key = Math.random().toString(30).substr(2, 11);
  const dt = new Date();
  const createDate =
    dt.getFullYear() + '. ' + (dt.getMonth() + 1) + '. ' + dt.getDate() + '.';
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, memoCode, backgroundColor, fontColor, title, createDate) values` +
    `('${key}', '${memoCode}', '${backgroundColor}', '${fontColor}',  '${title}', '${createDate}')`;
  return db.executeSql(insertQuery);
};

export const deleteMemoItem = async (db, key) => {
  const deleteQuery = `DELETE FROM ${tablename} WHERE key = ${key}`;
  await db.executeSql(deleteQuery);
};
