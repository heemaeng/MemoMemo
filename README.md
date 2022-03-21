# MemoMemo 메모 관리 앱

React-Native를 이용한 메모 관리 앱 출시.



- Demo : [Google Play](https://play.google.com/store/apps/details?id=com.memomemo) , ~~App Store~~ 

프로젝트는 안드로이드에서만 출시되었습니다. 



### Latest Release (2022/03/21)  

현재 버전은 v1.0.1 입니다.



### 개발 목표

React-Native의 다양한 컴포넌트와 Hooks 사용, sqlite를 활용한 데이터베이스 이해. 모바일 환경에서의 디자인 규칙 이해.



### 사용 기술

- React Native

  

### 주요 기능

#### 1. 메모를 저장, 수정, 삭제



- 메모 저장

  

  ![save](C:\Users\gml78\Downloads\save.gif)

  

- 메모 수정

  

  ![update](C:\Users\gml78\Downloads\update.gif)

  

- 메모 삭제

  ![delete](C:\Users\gml78\Downloads\delete.gif)



```javascript

'dbConnection.js'

...

import {openDatabase} from 'react-native-sqlite-storage';

// DataBase Connect 함수
export const getDBConnection = async () => {
  return openDatabase({name: 'MemoDatabase.db', location: 'default'});
};


'memoDBService.js'

...

// DataBase Table Create 함수
export const createMemoTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tablename}(key VARCHAR(150) PRIMARY KEY, memoCode VARCHAR(150), backgroundColor VARCHAR(10), fontColor VARCHAR(10), title VARCAHR(150), createDate VARCAHR(150));`;
  await db.executeSql(query);
};

...

// INSERT Memo 정보 저장 함수
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


'InsertModal.js'

...

// 사용자가 저장했을때 실행
const onInsert = async () => {
    if (!props.title.trim()) {
      props.setModalVisible(!props.modalVisible);
      return props.setWarnModalVisible(!props.warnModalVisible);
    }
    if (checks.length <= 0) {
      props.setModalVisible(!props.modalVisible);
      return props.setWarnItemModalVisible(!props.warnItemModalVisible);
    }
    try {
      // DataBase Connect
      const db = await getDBConnection();
      const memoKey = Math.random().toString(30).substr(2, 11);
      const memoCode = Math.random().toString(20).substr(2, 11);
      // Memo 정보 저장
      await saveMemoItemItems(db, checks, memoCode);
      // Memo 하위 정보 저장
      await saveMemoItems(
        memoKey,
        db,
        props.backgroundColor,
        props.fontColor,
        props.title,
        memoCode,
      );
      props.setModalVisible(!props.modalVisible);
      dispatch({type: 'REMOVE_ALL'});
      return props.navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };
```



Sqlite 라이브러리를 이용하여 사용자가 메모를 입력하고 저장했을때 메모 저장과 관련된 함수를 호출. 

이와같은 방법으로 삭제, 수정이 이루어짐.



#### 2. 메모를 sns로 전송



![share](C:\Users\gml78\Downloads\share.gif)



```react
<Pressable
    onPress={async () => {
        try {
            // 공유할 메모 정보 초기화
            var memoItemText = '';
            props.setModalVisible(false);
            // 메모 체크항목이 존재할 때
            if (props.memoItem.length > 0) {
                for (let i = 0; i < props.memoItem.length; i++) {
                    // 중요한 체크항목
                    if (props.memoItem[i].bookMark) {
                        // 체크
                        if (props.memoItem[i].checkValue) {
                            memoItemText +=
                                ' - ' +
                                '*' +
                                '[v] ' +
                                props.memoItem[i].productName +
                                '\n';
                        // 체크X
                        } else {
                            memoItemText +=
                                ' - ' + '*' + props.memoItem[i].productName + '\n';
                        }
                    } else {
                        // 체크
                        if (props.memoItem[i].checkValue) {
                            memoItemText +=
                                ' - ' + '[v] ' + props.memoItem[i].productName + '\n';
                        // 체크X
                        } else {
                            memoItemText +=
                                ' - ' + props.memoItem[i].productName + '\n';
                        }
                    }
                }
            }
            // 최종 메세지
            const result = await Share.share({
                message: props.memoTitle + "'s memo" + '\n' + memoItemText,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.error(error);
        }
    }}
    style={({pressed}) => [
        {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: pressed ? 'rgb(210,230,255)' : 'transparent',
        },
    ]}>
    <ContentView viewChild="first">
        <ContentText>Share</ContentText>
        <FeatherIcon name="send" color={'#000000'} size={20} />
    </ContentView>
</Pressable>
```

사용자가 Share 버튼을 눌렀을 때 현재 메모의 정보를 공유.





#### 개선 사항

-   메모를 입력하였을때 최근에 입력한 메모를 보여줘야함
    
-   위젯으로 사용자가 먼저 볼 수 있도록 해야함
