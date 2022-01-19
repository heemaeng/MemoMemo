import {enablePromise} from 'react-native-sqlite-storage';

const tablename = 'Memo';

enablePromise(true);

export const createMemoTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) UNIQUE, memoCode VARCHAR(150), title VARCAHR(150), createDate VARCHAR(10));`;
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

export const saveMemoItems = async (db, title) => {
  const key = Math.random().toString(30).substr(2, 11);
  const memoCode = Math.random().toString(20).substr(2, 11);
  const dt = new Date();
  const createDate =
    dt.getFullYear() + '. ' + (dt.getMonth() + 1) + '. ' + dt.getDate() + '.';
  const insertQuery =
    `INSERT OR REPLACE INTO ${tablename}(key, memoCode, title, createDate) values` +
    `('${key}', '${memoCode}', '${title}', '${createDate}')`;

  return db.executeSql(insertQuery);
};

export const deleteMemoItem = async (db, key) => {
  const deleteQuery = `DELETE FROM ${tablename} WHERE key = ${key}`;
  await db.executeSql(deleteQuery);
};

// export const insertQuery = (title, item, navigation, dispatch) => {
//   const key = Math.random().toString(30).substr(2, 11);
//   const code = Math.random().toString(20).substr(2, 11);
//   const dt = new Date();
//   const cdate =
//     dt.getFullYear() + '. ' + (dt.getMonth() + 1) + '. ' + dt.getDate() + '.';

//   if (!title) {
//     console.log('제목을 넣어주세요');
//     return;
//   }
//   db.transaction(tx => {
//     for (var i = 0; i < item.length; i++) {
//       (function () {
//         tx.executeSql(
//           'INSERT INTO MemoItem (key, memoCode, title, content, checkValue) VALUES (?,?,?,?,?)',
//           [item[i].key, code, item[i].title, item[i].count, item[i].done],
//           error => {
//             console.log('error on getting MemoItem ' + error.message);
//           },
//         );
//       })(i);
//     }

//     tx.executeSql(
//       'INSERT INTO Memo (key, memoCode, title, createDate) VALUES (?,?,?,?)',
//       [key, code, title, cdate],
//       res => {
//         console.log('Results', res.rowsAffected);
//         navigation.navigate('Home');
//         if (res.rowsAffected > 0) {
//           Alert.alert(
//             'Success',
//             'You are Registered Successfully',
//             [
//               {
//                 text: 'Ok',
//                 onPress: () => {
//                   dispatch({type: 'REMOVE_ALL'});
//                   navigation.navigate('Home');
//                 },
//               },
//             ],
//             {cancelable: false},
//           );
//         } else {
//           console.log('Registration Failed');
//         }
//       },
//     );
//   });
// };
