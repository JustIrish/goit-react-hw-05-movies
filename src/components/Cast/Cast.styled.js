import styled from 'styled-components';

export const ListWrap = styled.div`
  padding: 16px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 16px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 160px;
  gap: 10px;

  p {
    font-size: 14px;
    text-align: center;
  }
`;
