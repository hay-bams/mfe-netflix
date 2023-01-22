import styled from 'styled-components';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {Input} from '@/components/Form/Input';
import {Label} from '@/components/Form/Label';
import useAuth from '@/hooks/useAuth';

interface Inputs {
  email: string;
  password: string;
}

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

  @media only screen and (min-width: 768px) {
    max-width: 28rem;
    padding-inline: 3.5rem;
    margin-top: 0;
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

const InputError = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: red;
`;

export const Login = () => {
  const [login, setLogin] = useState(false);
  const {signIn, signUp} = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };
  console.log(errors);
  return (
    <LoginContainer>
      <Background src="https://rb.gy/p2hphi" />

      <LogoContainer>
        <Logo src="https://rb.gy/ek4j9f" />
      </LogoContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Sign In</Heading>
        <FormInputsContainer>
          <Label>
            <Input
              placeholder="Email"
              type="email"
              required
              {...register('email')}
            />
            {errors.email && (
              <InputError>Please enter a valid email.</InputError>
            )}
          </Label>

          <Label>
            <Input
              placeholder="Password"
              type="password"
              required
              {...register('password')}
            />
            {errors.password && (
              <InputError>
                Your password must contain between 4 and 60 characters.
              </InputError>
            )}
          </Label>
        </FormInputsContainer>
        <SigninButton type="submit" onClick={() => setLogin(true)}>
          Sign in
        </SigninButton>
        <FootNote>
          New to Netflix?
          <SignupButton type="submit" onClick={() => setLogin(false)}>
            Sign up now
          </SignupButton>
        </FootNote>
      </Form>
    </LoginContainer>
  );
};
