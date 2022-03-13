import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import InsertTemplate from '../components/insert/InsertTemplate';
import InsertHead from '../components/insert/InsertHead';
import InsertList from '../components/insert/InsertList';
import InsertCreate from '../components/insert/InsertCreate';
import ColorData from '../assets/data/color/ColorData';
import {CheckProvider} from '../hooks/AppContext';
import InsertModal from '../components/insert/InsertModal';
import InsertAlert from '../components/alert/InsertAlert';
import WarnAlert from '../components/alert/WarnAlert';
import WarnItemAlert from '../components/alert/WarnItemAlert';

const InsertScreen = ({navigation}) => {
  const defaultColor = ColorData.find(color => color.num === 6);
  const [backgroundColor, setBackgroundColor] = useState(defaultColor.code);
  const [fontColor, setFontColor] = useState(defaultColor.fontColor);
  const [title, setTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [insertModalVisible, setInsertModalVisible] = useState(false);
  const [warnModalVisible, setWarnModalVisible] = useState(false);
  const [warnItemModalVisible, setWarnItemModalVisible] = useState(false);
  const SafeAreaViewStyle = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  const onColorPickSubmit = params => {
    setBackgroundColor(params.colorCode);
    setFontColor(params.fontColor);
  };
  const onInsertModal = () => {
    setInsertModalVisible(true);
  };
  const onWarnModal = () => {
    setWarnModalVisible(true);
  };
  const onWarnItemModal = () => {
    setWarnItemModalVisible(true);
  };
  return (
    <CheckProvider initialCheck={[]}>
      <SafeAreaView style={SafeAreaViewStyle.container}>
        <InsertTemplate backgroundColor={backgroundColor}>
          <InsertHead
            navigation={navigation}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            title={title}
            setTitle={setTitle}
            onInsertModal={onInsertModal}
          />
          <InsertList />
          <InsertCreate
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            onColorPick={onColorPickSubmit}
            setModalVisible={setModalVisible}
          />
          <InsertModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <InsertAlert
            navigation={navigation}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            title={title}
            modalVisible={insertModalVisible}
            setModalVisible={setInsertModalVisible}
            warnModalVisible={warnModalVisible}
            setWarnModalVisible={setWarnModalVisible}
            warnItemModalVisible={warnItemModalVisible}
            setWarnItemModalVisible={setWarnItemModalVisible}
            onWarnModal={onWarnModal}
            onWarnItemModal={onWarnItemModal}
          />
          <WarnAlert
            subText="Please enter the title"
            modalVisible={warnModalVisible}
            setModalVisible={setWarnModalVisible}
          />
          <WarnItemAlert
            subText="Please enter at least one product name."
            modalVisible={warnItemModalVisible}
            setModalVisible={setWarnItemModalVisible}
          />
        </InsertTemplate>
      </SafeAreaView>
    </CheckProvider>
  );
};
export default InsertScreen;
