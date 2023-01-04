import styled from 'styled-components';

import {Input} from '@/components/Form/Input';
import {Label} from '@/components/Form/Label';
import {Button} from '@/components/Button/Button';

const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #000;

  @media only screen and (min-width: 768px) {
    align-items: center;
    justify-content: center;
    background: transparent;
  }
`;

const Background = styled.img`
  cursor: pointer;
  object-fit: cover;
  display: none;
  opacity: 0.6;
  z-index: -10;
  position: absolute;
  min-width: 100%;
  max-width: 100%;
  height: 100%;

  @media only screen and (min-width: 640px) {
    display: inline;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
  height: 5rem;
  width: 11rem;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    left: 2rem;
    top: 1rem;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  object-fit: contain;
`;

const Form = styled.form`
  position: relative;
  margin-top: 6rem;
  & > * + * {
    margin-top: 2rem;
  }
  border-radius: 0.25rem;
  background: rgb(0 0 0/0.75);
  padding-block: 2.5rem;
  padding-inline: 1.5rem;
  margin-top: 0;

  @media only screen and (min-width: 768px) {
    max-width: 28rem;
    padding-inline: 3.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
`;

const FormInputsContainer = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const SigninButton = styled.button`
  width: 100%;
  cursor: pointer;
  color: inherit;
  font-weight: 600;
  border-radius: 0.25rem;
  background: #e50914;
  padding-block: 0.75rem;
`;

const SignupButton = styled.button`
 color: #fff;
 background: none;
 cursor: pointer;
 &:hover {
  text-decoration: underline;
 }
`;

const FootNote = styled.div`
  color: gray;
`;

export const Login = () => {
  console.log('#');
  return (
    <LoginContainer>
      <Background src="https://rb.gy/p2hphi" />

      <LogoContainer>
        <Logo src="https://rb.gy/ek4j9f" />
      </LogoContainer>

      <Form>
        <Heading>Sign In</Heading>
        <FormInputsContainer>
          <Label>
            <Input placeholder="Email" type="email" />
          </Label>

          <Label>
            <Input placeholder="Password" type="password" />
          </Label>
        </FormInputsContainer>
        <SigninButton type="submit">Sign in</SigninButton>
        <FootNote>
          New to Netflix?
          <SignupButton type="submit">Sign up now</SignupButton>
        </FootNote>
      </Form>
    </LoginContainer>
  );
};
