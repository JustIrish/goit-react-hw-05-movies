import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handlerSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.input.value;
    if (query.trim() === '') {
      toast.error('Please, enter your query!');
    }
    onSubmit(query);
    evt.currentTarget.reset();
  };

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <SearchInput type="text" name="input" />
      <SearchBtn type="submit">
        <CiSearch size={22} />
      </SearchBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
