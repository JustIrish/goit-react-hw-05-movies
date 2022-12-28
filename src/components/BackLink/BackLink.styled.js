import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  margin: 10px 0px 10px 10px;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1),
    border-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    color: #d81d56;
    border-color: #d81d56;
  }
`;
