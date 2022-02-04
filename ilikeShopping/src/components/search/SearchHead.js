import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert} from 'react-native';

const Block = styled.View`
  background-color: #e7e9eb;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6px 16px 6px 8px;
`;

const BackIconTouchableOpacity = styled.TouchableOpacity`
  margin-right: 8px;
  align-self: center;
`;

const SearchView = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #ced2d8;
  border-radius: 6px;
`;

const SearchTextInput = styled.TextInput`
  flex: 1;
  padding: 4px 0px 4px 12px;
  font-size: 15px;
  font-weight: 600;
`;

const DeleteTextTouchableOpacity = styled.TouchableOpacity`
  align-self: center;
  padding-right: 4px;
`;

const SearchHead = props => {
  const [textValue, onChangeText] = useState('');
  return (
    <Block>
      <BackIconTouchableOpacity onPress={props.backPage}>
        <Icon name="arrow-back-outline" color={'#171b24'} size={26} />
      </BackIconTouchableOpacity>
      <SearchView>
        <SearchTextInput
          placeholder="검색"
          placeholderTextColor="#868687"
          selectionColor="#4b8c4a"
          onChangeText={text => {
            onChangeText(text);
            if (text === '') {
              props.searchHistoryComponentShow();
            }
          }}
          value={textValue}
          onSubmitEditing={() => {
            if (textValue !== '') {
              props.saveSearchHistoryData(textValue);
              props.loadMemoDataCallback(textValue);
            } else {
              Alert.alert('경고', '검색어를 입력해주세요', [{text: '확인'}]);
            }
          }}
        />
        {textValue !== '' && (
          <DeleteTextTouchableOpacity
            onPress={() => {
              onChangeText('');
              props.loadSearchDataCallback();
              props.searchHistoryComponentShow();
            }}>
            <Icon name="close-circle" color={'#000000'} size={18} />
          </DeleteTextTouchableOpacity>
        )}
      </SearchView>
    </Block>
  );
};

export default SearchHead;
