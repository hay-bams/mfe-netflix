import {ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const LabelStyled = styled.label`
  width: 100%;
  display: inline-block;
`;


export const Label = ({children}: Props) => (
  <LabelStyled>{children}</LabelStyled>
);
