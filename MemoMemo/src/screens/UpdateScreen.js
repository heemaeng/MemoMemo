import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import UpdateTemplate from '../components/update/UpdateTemplate';
import UpdateHead from '../components/update/UpdateHead';
import UpdateList from '../components/update/UpdateList';
import UpdateCreate from '../components/update/UpdateCreate';
import {CheckProvider} from '../hooks/AppContext';
import UpdateModal from '../components/update/UpdateModal';
import UpdateAlert from '../components/alert/UpdateAlert';
import WarnAlert from '../components/alert/WarnAlert';
import WarnItemAlert from '../components/alert/WarnItemAlert';

const UpdateScreen = ({route, navigation}) => {
  const [backgroundColor, setBackgroundColor] = useState(
    route.params.backgroundColor,
  );
  const [fontColor, setFontColor] = useState(route.params.fontColor);
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(String(route.params.title));
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
  const onUpdateModal = () => {
    setInsertModalVisible(true);
  };
  const onWarnModal = () => {
    setWarnModalVisible(true);
  };
  const onWarnItemModal = () => {
    setWarnItemModalVisible(true);
  };
  return (
    <CheckProvider initialCheck={route.params.memoItem}>
      <SafeAreaView style={SafeAreaViewStyle.container}>
        <UpdateTemplate backgroundColor={backgroundColor}>
          {fontColor === '#ffffff' ? (
            <StatusBar
              barStyle=""
              hidden={false}
              backgroundColor={backgroundColor}
              translucent={false}
              networkActivityIndicatorVisible
            />
          ) : (
            <StatusBar
              barStyle="dark-content"
              hidden={false}
              backgroundColor={backgroundColor}
              translucent={false}
              networkActivityIndicatorVisible
            />
          )}

          <UpdateHead
            backPage={() => navigation.goBack()}
            navigation={navigation}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            title={title}
            setTitle={setTitle}
            onUpdateModal={onUpdateModal}
          />
          <UpdateList />
          <UpdateCreate
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            onColorPick={onColorPickSubmit}
            setModalVisible={setModalVisible}
          />
          <UpdateModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <UpdateAlert
            navigation={navigation}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            title={title}
            memoKey={route.params.memoKey}
            memoCode={route.params.memoCode}
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
        </UpdateTemplate>
      </SafeAreaView>
    </CheckProvider>
  );
};

export default UpdateScreen;
