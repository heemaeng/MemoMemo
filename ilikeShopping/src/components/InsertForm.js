import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const InsertFormPositioner = styled.View`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

// const Form = styled.Form`
//   background: #f8f9fa;
//   padding-left: 32px;
//   padding-top: 32px;
//   padding-right: 32px;
//   padding-bottom: 72px;

//   border-bottom-left-radius: 16px;
//   border-bottom-right-radius: 16px;
//   border-top: 1px solid #e9ecef;
// `;

// const Input = styled.Input`
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   width: 100%;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -36,
  },
});
const InsertForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const onToggle = {};
  return (
    <>
      {/* {open && (
        <InsertFormPositioner>
          <Form>
            <Input />
          </Form>
        </InsertFormPositioner>
      )} */}

      <TouchableOpacity style={styles.container} onPress={onToggle}>
        <Icon name="add-circle" size={70} style={{color: '#36d8a7'}} />
      </TouchableOpacity>
    </>
  );
};

export default InsertForm;
