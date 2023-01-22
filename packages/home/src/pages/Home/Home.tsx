import {useLoaderData} from 'react-router-dom';
import styled from 'styled-components';

import {AllMovies} from './Home.types';

import {getAllMovies} from '@/api/movies';
import {Banner} from '@/components/Banner';
import {Row} from '@/components/Row/Row';
import {useAppSelector} from '@/hooks/useAppSelector';
import {Modal} from '@/components/Modal';

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
const Section = styled.section`
  & > * + * {
    margin-top: 6rem;
  }
`;

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
  const showModal = useAppSelector((state) => state.showModal);

  console.log(showModal, '?????');
  return (
    <>
      <Main>
        <Banner netflixOriginals={netflixOriginals} />

        <Section>
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romantic Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </Section>
      </Main>
      <Modal open={true}>{null}</Modal>
    </>
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
