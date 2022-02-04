import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  padding: 5px 10px 5px 10px;
  flex-direction: row;
`;
const SearchWordView = styled.View`
  flex: 1;
  margin: 0px 10px 0px 10px;
  align-self: center;
`;
const SearchWordText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color: #000000;
`;
const DeleteTouchableOpacity = styled.TouchableOpacity`
  align-self: center;
`;
const SearchHistoryItem = props => {
  return (
    <Block>
      <MaterialCommunityIcons name="history" color={'#111222'} size={30} />
      <SearchWordView>
        <SearchWordText>{props.searchWord}</SearchWordText>
      </SearchWordView>
      <DeleteTouchableOpacity
        onPress={() => {
          props.deleteSearchHistoryData(props.itemKey);
          props.loadSearchDataCallback();
        }}>
        <Icon name="close-circle-outline" color={'#111222'} size={24} />
      </DeleteTouchableOpacity>
    </Block>
  );
};

export default SearchHistoryItem;
