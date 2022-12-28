import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackdropImg = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${props => props.backdrop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const CardMovie = styled.div`
  display: flex;
  gap: 20px;
`;

export const PosterImage = styled.img`
  width: 300px;
  margin-left: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 450px;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;

  li {
    padding: 2px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover,
  :focus-visible {
    color: #d81d56;
  }

  &.active {
    color: #d81d56;
  }
`;
