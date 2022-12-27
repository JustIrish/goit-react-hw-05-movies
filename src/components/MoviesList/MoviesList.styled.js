import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const ListItem = styled.li`
  width: calc(100% / 4 - 48px);
  border-radius: 15px;
  background-color: #e8e9ec;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  scale: 1;
  transition: scale 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
    box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 7px 2px #a8a6a5;
  }
`;

export const PosterImg = styled.img`
  height: 400px;
  border-radius: 15px 15px 0px 0px;
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #656870;
  padding: 10px;
`;
