import styled from 'styled-components';

import {Movie} from '@/typings';

interface Props {
  movie: Movie;
}

const ThumbnailContainer = styled.div`
  position: relative;
  min-width: 180px;
  height: 7rem;
  cursor: pointer;
  transition: all 200ms ease-out;
  overflow:hidden;
  @media only screen and (min-width: 768px) {
    min-width: 260px;
    height: 9rem;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ThumbnailImage = styled.img`
  border-radius: 0.125rem;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  @media only screen and (min-width: 768px) {
    border-radius: 0.25rem;
  }
`;

export const Thumbnail = ({movie}: Props) => {
  console.log('');
  return (
    <ThumbnailContainer>
      <ThumbnailImage
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
      />
    </ThumbnailContainer>
  );
};
