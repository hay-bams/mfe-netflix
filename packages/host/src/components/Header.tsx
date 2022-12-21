import styled from 'styled-components';
import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 1rem;
  transition: all;

  @media only screen and (min-width: 992px) {
    padding-inline: 2.5rem;
    padding-block: 1.5rem;
  }
`;

const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 0.5rem; //  space-x-2
    @media only screen and (min-width: 768px) {
      margin-left: 2.5rem;
    }
  }
`;

const Logo = styled.img`
  cursor: pointer;
  object-fit: contain;
`;

const ListContainer = styled.ul`
  list-style-type: none;
  display: none;
  & > * + * {
    margin-left: 1rem;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 0.875rem; // text-sm
  line-height: 1.25rem;
  font-weight: 300;
  color: #e5e5e5;
  transition-property: color;
  transition-duration: 0.4s;
  &:hover {
    color: #b3b3b3;
  }
`;

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 300;
  & > * + * {
    margin-left: 1rem;
  }
`;

const MagnifyingGlassContainer = styled.div`
  display: none;
  width: 1.5rem; // w-6
  height: 1.5rem;
  @media only screen and (min-width: 640px) {
    display: inline-block;
  }
`;

const KidsParagraph = styled.div`
  display: none;
  @media only screen and (min-width: 992px) {
    display: inline;
  }
`;

const BellIconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const LinkImage = styled.img`
  cursor: pointer;
  border-radius: 0.25rem;
`;

export const Header = () => (
  <HeaderStyled>
    <LeftHeaderContainer>
      <Link to="/">
        <Logo src="https://rb.gy/ulxxee" width={100} />
      </Link>
      <ListContainer>
        <ListItem>Home</ListItem>
        <ListItem>Tv Shows</ListItem>
        <ListItem>Movies</ListItem>
        <ListItem>New & Popular</ListItem>
        <ListItem>My List</ListItem>
      </ListContainer>
    </LeftHeaderContainer>

    <RightHeaderContainer>
      <MagnifyingGlassContainer>
        <MagnifyingGlassIcon />
      </MagnifyingGlassContainer>
      <KidsParagraph>Kids</KidsParagraph>
      <BellIconContainer>
        <BellIcon />
      </BellIconContainer>
      <Link to="/account">
        <LinkImage
          // onClick={() => navigate('/account')}
          src="https://rb.gy/g1pwyx"
          alt=""
        />
      </Link>
    </RightHeaderContainer>
  </HeaderStyled>
);
