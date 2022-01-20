import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Block = styled.View`
  background-color: #ffffff;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LogoView = styled.View`
  background-color: #9e9e9e;
`;

const LogoText = styled.Text`
  flex: 1;
  color: #171b24;
  font-weight: 700;
  background-color: #ffffff;
  font-size: 24px;
`;

const HeaderView = styled.View`
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

const SearchTextInput = styled.TextInput`
  width: 90%;
  padding: 0;
`;

const SearchLogoTouchableOpacity = styled.TouchableOpacity``;
const Search = () => {
  return (
    <Block>
      <HeaderView>
        <LogoText>메모</LogoText>
        <SearchLogoTouchableOpacity>
          <Icon name="search" color={'#171b24'} size={26} />
        </SearchLogoTouchableOpacity>
      </HeaderView>
    </Block>
  );
};

export default Search;
