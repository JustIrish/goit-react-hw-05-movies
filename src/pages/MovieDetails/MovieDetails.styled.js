import styled from 'styled-components';

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
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 450px;
`;
