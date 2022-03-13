import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import SettingsTemplate from '../components/settings/SettingsTemplate';
import SettingsHead from '../components/settings/SettingsHead';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SettingsTemplate>
      <SettingsHead />

      <Text>셋팅 화면 입니다</Text>
      <Text>크게보기/작게보기</Text>
      <Text>위젯보기</Text>
      <Text>만든이</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SettingsTemplate>
  );
};

export default SettingsScreen;
