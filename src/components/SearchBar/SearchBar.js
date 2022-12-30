import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';
import { useEffect, useState } from 'react';

export const SearchBar = ({ value, onSubmit }) => {
  const [query, setQuery] = useState('');

  const handlerSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter your query!');
    }
    onSubmit(query);
  };

  useEffect(() => setQuery(value), [value]);

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <SearchInput
        type="text"
        name="input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchBtn type="submit">
        <CiSearch size={22} />
      </SearchBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
