import React, {useRef, useState} from 'react';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useCheckDispatch, useCheckNextId} from '../../hooks/AppContext';

const Overlay = styled.View`
  flex: 1;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  justify-content: flex-end;
`;
const Block = styled.View``;
const MemoInputBlock = styled.View`
  flex-direction: row;
  padding: 0;
  background-color: #fff;
`;
const MemoTextInput = styled.TextInput`
  flex: 1;
  padding: 8px;
  color: #000;
  flex-shrink: 1;
`;
const IconTouch = styled.TouchableOpacity`
  align-self: center;
  padding-right: 5px;
`;
const UpdateModal = props => {
  const inputRef = useRef();
  const [star, setStar] = useState(false);
  const [productName, setProductName] = useState('');
  const [bookMark, setBookMark] = useState(false);
  const dispatch = useCheckDispatch();
  const nextId = useCheckNextId();
  return (
    <Modal visible={props.modalVisible} animationType="slide" transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          setStar(false);
          setProductName('');
          props.setModalVisible(false);
        }}>
        <Overlay />
      </TouchableWithoutFeedback>
      <Block>
        <MemoInputBlock>
          <MemoTextInput
            ref={inputRef}
            onLayout={() => {
              setTimeout(() => inputRef.current.focus(), 100);
            }}
            onChangeText={text => setProductName(text)}
            onSubmitEditing={() => {
              if (productName !== '') {
                dispatch({
                  type: 'CREATE',
                  list: {
                    id: nextId.current,
                    key: Math.random().toString(30).substr(2, 11),
                    productName: productName,
                    checkValue: false,
                    bookMark: bookMark,
                  },
                });
              }
              nextId.current += 1;
              setProductName('');
              setStar(false);
              setBookMark(false);
              props.setModalVisible(false);
            }}
            placeholder="New Item
            "
            value={productName}
          />
          <IconTouch
            onPress={() => {
              setStar(!star);
              setBookMark(!bookMark);
            }}>
            {star ? (
              <AntDesign name="star" size={25} />
            ) : (
              <AntDesign name="staro" size={25} />
            )}
          </IconTouch>
        </MemoInputBlock>
      </Block>
    </Modal>
  );
};

export default UpdateModal;
