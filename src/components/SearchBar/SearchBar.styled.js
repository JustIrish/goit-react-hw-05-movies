import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  height: 42px;
  padding: 9px 32px 8px 8px;
  border-radius: 4px 0px 0px 4px;
  border-right: 0;
  outline: none;
  font: inherit;
  font-size: 18px;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 0px 4px 4px 0px;
  border-left: 0;
  background-color: #fff;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:fover {
    opacity: 1;
  }
`;
