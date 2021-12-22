import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddButton = props => {
  const onButtonClicked = props => {
    console.log(props.open);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onButtonClicked}
      open={props.open}>
      <Icon name="add-circle" size={70} style={{color: '#36d8a7'}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -36,
  },
});
export default AddButton;
