import {enablePromise} from 'react-native-sqlite-storage';

const tablename = 'MemoItem';

enablePromise(true);

export const createMemoItemTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) UNIQUE, memoCode VARCHAR(150), productName VARCAHR(150), amount VARCHAR(10), checkValue INTEGER(1))`;
  await db.executeSql(query);
};

export const deleteMemoItemTable = async db => {
  const query = `DROP TABLE ${tablename}`;
  await db.executeSql(query);
};

export const getMemoItemItems = async (db, memoCode) => {
  try {
    const memoItemItems = [];
    const selectQuery = `SELECT * FROM ${tablename} WHERE memoCode = '${memoCode}'`;
    const results = await db.executeSql(selectQuery);
    results.forEach(result => {
      if (result.rows.length > 0) {
        for (let index = 0; index < result.rows.length; index++) {
          memoItemItems.push(result.rows.item(index));
        }
      }
    });
    return memoItemItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get MemoItemItems');
  }
};

export const getAllMemoItemItems = async db => {
  try {
    const memoItemItems = [];
    const selectQuery = `SELECT * FROM ${tablename}`;
    const results = await db.executeSql(selectQuery);
    results.forEach(result => {
      if (result.rows.length > 0) {
        for (let index = 0; index < result.rows.length; index++) {
          memoItemItems.push(result.rows.item(index));
        }
      }
    });
    return memoItemItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get MemoItemItems');
  }
};

export const getMemoItemCheck = async (db, memoCode) => {
  try {
    let memoItemCheck = [];
    const results = await db.executeSql(
      `SELECT * FROM ${tablename} WHERE memoCode = '${memoCode}' AND checkValue = 1`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        memoItemCheck.push(result.rows.item(index));
      }
    });
    return memoItemCheck;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get MemoItemCount');
  }
};

export const saveMemoItemItems = async (db, memoItemItems, memoCode) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, memoCode, productName, amount, checkValue) values` +
    memoItemItems
      .map(
        i =>
          `('${i.key}', '${memoCode}', '${i.productName}', '${
            i.amount
          }', ${Number(i.checkValue)})`,
      )
      .join(',');
  return db.executeSql(insertQuery);
};

export const deleteMemoItemItem = async (db, key) => {
  const deleteQuery = `DELETE FROM ${tablename} WHERE key = ${key}`;
  await db.executeSql(deleteQuery);
};

export const updateMemoItemItem = async (db, key, checkValue) => {
  const updateQuery = `UPDATE ${tablename} SET checkValue = ${Number(
    checkValue,
  )} WHERE key = '${key}'`;
  await db.executeSql(updateQuery);
};
