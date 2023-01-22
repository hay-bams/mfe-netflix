import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {FaPlay} from 'react-icons/fa';
import {InformationCircleIcon} from '@heroicons/react/24/solid';

import {Movie} from '@/typings';
import {baseUrl} from '@/constants/movie';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {showModal} from './Modal';
import {useAppSelector} from '@/hooks/useAppSelector';
import {setCurrentMovie} from './Row/moviesSlice';

interface Props {
  netflixOriginals: Movie[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 4rem;
  & > * + * {
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    & > * + * {
      margin-top: 1rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 65vh;
    justify-content: flex-end;
    padding-bottom: 3rem;
  }
`;

const MovieTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

const MovieOverview = styled.div`
  max-width: 20rem;
  font-size: 0.75rem;
  line-height: 1rem;

  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

  @media only screen and (min-width: 768px) {
    max-width: 32rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 42rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const BannerImageConntainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 95vh;
  width: 100vw;
  z-index: -10;
`;

const BannerImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  & > * + * {
    margin-left: 0.75rem;
  }
`;

const BannerButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 0.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  transition-property: opacity;
  @media only screen and (min-width: 768px) {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const PlayButton = styled(BannerButton)`
  background: #fff;
  color: #000;
  cursor: pointer;
`;

const PlayIcon = styled(FaPlay)`
  height: 1rem;
  width: 1rem;
  color: #000;

  @media only screen and (min-width: 768px) {
    height: 1.75rem;
    width: 1.75rem;
  }
`;

const MoreInfoButton = styled(BannerButton)`
  background: hsla(0, 0%, 50%, 0.7);
  color: #fff;
  cursor: pointer;
`;

const MoreInfoIcon = styled(InformationCircleIcon)`
  height: 1.25rem;
  width: 1.25rem;
  color: #fff;

  @media only screen and (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;

export const Banner = ({netflixOriginals}: Props) => {
  const dispatch = useAppDispatch();
  const currentMovie = useAppSelector((state) => state.movies.currentMovie);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  return (
    <Container>
      <BannerImageConntainer>
        <BannerImage
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        />
      </BannerImageConntainer>
      <MovieTitle>
        {movie?.title || movie?.name || movie?.original_name}
      </MovieTitle>

      <MovieOverview>{movie?.overview}</MovieOverview>

      <ButtonContainer>
        <PlayButton>
          <PlayIcon />
          Play
        </PlayButton>
        <MoreInfoButton
          onClick={() => {
            dispatch(setCurrentMovie(movie));
            dispatch(showModal(true));
          }}>
          <MoreInfoIcon />
          More Info
        </MoreInfoButton>
      </ButtonContainer>
    </Container>
  );
};
