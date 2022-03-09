import React from 'react';
import styled, {css} from 'styled-components/native';

const Block = styled.View`
  flex: 1;
  padding-bottom: 32px;
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const InsertTemplate = ({children, ...props}) => {
  return <Block backgroundColor={props.backgroundColor}>{children}</Block>;
};

export default InsertTemplate;
