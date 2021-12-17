import React from 'react';
import {View, TextInput} from 'react-native';

const Mytextinput = props => {
  return (
    <View
      style={{
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderColor: '#aed581',
        borderWidth: 1,
      }}>
      <TextInput
        backgroundColor="#ffffff"
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#aed581"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;
