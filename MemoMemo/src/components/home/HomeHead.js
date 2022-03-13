import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, StatusBar} from 'react-native';

const Block = styled.View`
  background-color: #ffffff;
  padding: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  ${props =>
    props.selectMode &&
    css`
      background-color: #20232a;
    `}
`;
const LogoText = styled.Text`
  flex: 1;
  color: #171b24;
  font-weight: 700;
  font-size: 24px;
`;
const SelectText = styled.Text`
  flex: 3;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
`;
const HeaderView = styled.View`
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;
const SelectTouchableOpacity = styled.TouchableOpacity``;
const CancelTouchableOpacity = styled.TouchableOpacity``;
const SwapVerticalTouchableOpacity = styled.TouchableOpacity``;
const SendTouchableOpacity = styled.TouchableOpacity`
  margin-left: 8px;
`;
const DeleteTouchableOpacity = styled.TouchableOpacity`
  margin-left: 8px;
`;
const SearchLogoTouchableOpacity = styled.TouchableOpacity`
  margin-left: 8px;
`;
const HeaderImg = styled.Image`
  width: 30px;
  height: 30px;
  background-color: #fff;
`;
const HomeHead = props => {
  return (
    <Block selectMode={props.selectMode}>
      <HeaderView>
        {props.selectMode ? (
          <>
            <SelectTouchableOpacity onPress={props.allCheck}>
              {props.memoAllCheck ? (
                <MaterialCommunityIconsIcon
                  name="checkbox-blank"
                  color={'#fff'}
                  size={26}
                />
              ) : (
                <MaterialCommunityIconsIcon
                  name="checkbox-blank-outline"
                  color={'#fff'}
                  size={26}
                />
              )}
            </SelectTouchableOpacity>
            <SelectText>{props.selectMemoCount} Selection</SelectText>
            <DeleteTouchableOpacity>
              <Icon name="trash-bin" color={'#fff'} size={26} />
            </DeleteTouchableOpacity>
            <CancelTouchableOpacity onPress={() => props.cancelButton()}>
              <Icon name="close-outline" color={'#fff'} size={26} />
            </CancelTouchableOpacity>
          </>
        ) : (
          <>
            <LogoText>
              <HeaderImg
                source={require('../../assets/images/header_logo.png')}
              />
            </LogoText>
            {/* <SwapVerticalTouchableOpacity onPress={() => props.swapButton()}>
              <Icon name="swap-vertical" color={'#171b24'} size={26} />
            </SwapVerticalTouchableOpacity> */}
            <SearchLogoTouchableOpacity
              onPress={() => props.navigation.navigate('Search')}>
              <Icon name="search" color={'#171b24'} size={26} />
            </SearchLogoTouchableOpacity>
          </>
        )}
      </HeaderView>
    </Block>
  );
};

export default HomeHead;
