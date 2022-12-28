import styled from 'styled-components';

export const ListWrap = styled.div`
  padding: 16px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const CastItem = styled.li`
  width: 120px;

  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;
