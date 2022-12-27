import { CiSearch } from 'react-icons/ci';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handlerSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.input.value;
    if (query.trim() === '') {
      console.log('Enter query');
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
