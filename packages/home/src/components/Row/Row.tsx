import {useRef, useState} from 'react';
import styled from 'styled-components';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid';

import {RowLeftIconStyledProps} from './Row.types';
import {Thumbnail} from './Thumbnail';

import {Movie} from '@/typings';

interface Props {
  title: string;
  movies: Movie[];
}

const RowContainer = styled.div`
  height: 10rem;
  & > * + * {
    margin-top: 0.125rem;
  }

  @media only screen and (min-width: 768px) {
    & > * + * {
      margin-top: 0.5rem;
    }
  };
  
`;

const RowTitle = styled.h2`
  width: 14rem;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #e5e5e5;
  transition: all 200ms;
  &:hover {
    color: #fff;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const RowBodyContainer = styled.div`
  position: relative;
  &:hover {
    & > :first-child,
    & > :last-child {
      transition: all 200ms;
      transform: scale(1.25);
      opacity: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-left: -0.5rem;
  }
`;

const RowBody = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 0.5rem;
  & > * + * {
    margin-left: 0.125rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    & > * + * {
      margin-left: 0.625rem;
    }
  }
`;

const RowLeftIcon = styled(ChevronLeftIcon)<RowLeftIconStyledProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.5rem;
  z-index: 40;
  margin: auto;
  height: 2.25rem;
  width: 2.25rem;
  cursor: pointer;
  opacity: 0;
  display: ${(props) => !props.$isMoved && 'none'};
`;

const RowRightIcon = styled(ChevronRightIcon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.5rem;
  z-index: 40;
  margin: auto;
  height: 2.25rem;
  width: 2.25rem;
  cursor: pointer;
  opacity: 0;
`;

export const Row = ({title, movies}: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
   if(!isMoved) {
    setIsMoved(true);
   }
    if (rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});
    }
  };

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowBodyContainer>
        <RowLeftIcon $isMoved={isMoved} onClick={() => handleClick('left')} />
        <RowBody ref={rowRef}>
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </RowBody>
        <RowRightIcon onClick={() => handleClick('right')} />
      </RowBodyContainer>
    </RowContainer>
  );
};
