import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  display: flex;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: black;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &.active {
    color: #d81d56;
  }
`;

export const Wrapper = styled.div`
  padding: 16px 16px 30px;
`;
