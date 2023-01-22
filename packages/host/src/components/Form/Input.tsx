import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
}

const InputStyled = styled.input`
  width: 100%;
  background: #333333;
  padding-inline: 1.25rem;
  padding-block: 0.875rem;
  outline: none;
  border-radius: 0.25rem;
  color: inherit;
  &::placeholder {
    color: gray;
  }
  &:focus {
    background: #454545;
  }
`;

// export const Input = ({type = 'text', ...rest}: Props) => (
//   <InputStyled type={type} {...rest} />
// );



export const Input = forwardRef<any, Props>(({type = 'text', ...rest}, ref) => (
  <InputStyled type={type} {...rest} ref={ref} />
));

Input.displayName = 'Input'