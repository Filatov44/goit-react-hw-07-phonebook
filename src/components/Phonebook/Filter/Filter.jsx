
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter }  from 'redux/contacts-slice';
import { getFilter } from 'redux/contacts-selector';
import {
  StyledSearchLabel,
  StyledSearchInput,
  StyledSearchWrapper,
} from 'components/Phonebook/Filter/Filter.styled';

function Filter() {
  // вытягиваем значение фильтра из store
  const filter = useSelector(getFilter);

  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  }

  return (
    <StyledSearchWrapper>
      <StyledSearchLabel htmlFor="text">
        Find contacts by name
      </StyledSearchLabel>
      <StyledSearchInput
        name="filter"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </StyledSearchWrapper>
  );
}

export default Filter;
