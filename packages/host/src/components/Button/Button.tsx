import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonStyled = styled.button`
  width: 100%;
  cursor: pointer;
  font-weight: 600;
`;

export const Button = ({children, type = 'button', ...rest}: Props) => (
  <ButtonStyled type={type} {...rest}>
    {children}
  </ButtonStyled>
);
