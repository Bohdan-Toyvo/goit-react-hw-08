import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        name="name"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
