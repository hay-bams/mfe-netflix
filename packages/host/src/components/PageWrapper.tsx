import {ReactNode} from 'react';
import styled from 'styled-components';

import {Header} from './Header/Header';

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 0,
    rgba(20, 20, 20, 0.15) 15%,
    rgba(20, 20, 20, 0.35) 29%,
    rgba(20, 20, 20, 0.58) 44%,
    #141414 68%,
    #141414 100%
  );

  @media only screen and (min-width: 1024px) {
    height: 140vh;
  }
`;


export const PageWrapper = ({children}: Props) => (
  <Container>
    <Header />
    {children}
  </Container>
);
