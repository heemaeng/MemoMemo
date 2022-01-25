import React from 'react';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  padding-vertical: 14px;
  padding-horizontal: 8px;
  background-color: transparent;
  flex-direction: row;
  justify-content: flex-end;
`;

const CountText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;

const DetailBottom = props => {
  return (
    <Block>
      <CountText fontColor={props.fontColor}>
        {props.memoItemCheckCount} /{props.memoItemCount}
      </CountText>
    </Block>
  );
};

export default DetailBottom;
