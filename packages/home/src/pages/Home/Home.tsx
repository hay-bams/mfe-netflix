import {useLoaderData} from 'react-router-dom';
import styled from 'styled-components';

import {AllMovies} from './Home.types';

import {getAllMovies} from '@/api/movies';
import {Banner} from '@/components/Banner';

const Main = styled.main`
  position: relative;
  padding-left: 1rem;
  padding-bottom: 6rem;

  @media only screen and (min-width: 1024px) {
    padding-left: 4rem;
    & > * + * {
      margin-top: 6rem;
    }
  }
`;
const Section = styled.section``;
const Row = styled.div``;

export const Home = () => {
  const {
    netflixOriginals,
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
    topRated,
    trendingNow,
  } = useLoaderData() as AllMovies;
  // console.log(data, '^^^^^^^^');
  return (
    <Main>
      <Banner netflixOriginals={netflixOriginals} />
    <Section />
    </Main>
  );
};

export const loader = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await getAllMovies();

  return {
    netflixOriginals: netflixOriginals.results,
    trendingNow: trendingNow.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
    horrorMovies: horrorMovies.results,
    romanceMovies: romanceMovies.results,
    documentaries: documentaries.results,
  };
};
