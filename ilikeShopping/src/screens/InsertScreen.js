import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useCheckDispatch} from '../hooks/AppContext';
import InsertTemplate from '../components/insert/InsertTemplate';
import InsertHead from '../components/insert/InsertHead';
import InsertList from '../components/insert/InsertList';
import InsertCreate from '../components/insert/InsertCreate';
import ColorData from '../assets/data/color/ColorData';

const InsertScreen = ({navigation}) => {
  const dispatch = useCheckDispatch();
  const defaultColor = ColorData.find(color => color.num === 6);
  const [backgroundColor, setBackgroundColor] = useState(defaultColor.code);
  const [fontColor, setFontColor] = useState(defaultColor.fontColor);
  const SafeAreaViewStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const backPage = () => {
    dispatch({type: 'REMOVE_ALL'});
    navigation.navigate('Home');
  };

  const onColorPickSubmit = params => {
    setBackgroundColor(params.colorCode);
    setFontColor(params.fontColor);
  };

  return (
    <SafeAreaView style={SafeAreaViewStyle.container}>
      <InsertTemplate backgroundColor={backgroundColor}>
        <InsertHead
          backPage={backPage}
          navigation={navigation}
          dispatch={dispatch}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
        />
        <InsertList />
        <InsertCreate
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          onColorPick={onColorPickSubmit}
        />
      </InsertTemplate>
    </SafeAreaView>
  );
};
export default InsertScreen;
