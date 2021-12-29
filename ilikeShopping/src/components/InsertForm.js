import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const InsertFormPositioner = styled.View`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const Form = styled.View`
  background-color: #f8f9fa;
`;

const Input = styled.TextInput`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  font-size: 18px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: -36,
  },
});
const InsertForm = props => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* {open && (
        <InsertFormPositioner>
          <Form>
            <Input />
            <TextInput />
          </Form>
        </InsertFormPositioner>
      )} */}
      <TouchableOpacity
        style={styles.container}
        onPress={props.onAddNewInputTextView}>
        <Icon name="add-circle" size={70} style={{color: '#36d8a7'}} />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.container}
        onPress={props.onAddNewInputTextView}>
        {open === true ? (
          <>
            <Icon name="add-circle" size={70} style={{color: '#ff6b6b'}} />
          </>
        ) : (
          <Icon name="add-circle" size={70} style={{color: '#36d8a7'}} />
        )}
      </TouchableOpacity> */}
    </>
  );
};

export default InsertForm;
