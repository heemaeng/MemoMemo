import {enablePromise} from 'react-native-sqlite-storage';

const tablename = 'Option';

export const createOptionTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename} (key VARCHAR(150) PRIMARY KEY, time INTEGER(1), name INTEGER(1), ascend INTEGER(1), descend INTEGER(1))`;
  await db.executeSql(query);
};

export const saveHomeOption = async (db, homeOptionItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, time, name, ascend, descend) values` +
    homeOptionItems
      .map(
        i =>
          `('${i.key}', '${Number(i.time)}', '${Number(i.name)}',  ${Number(
            i.ascend,
          )}, ${Number(i.descend)})`,
      )
      .join(',');
  return db.executeSql(insertQuery);
};
