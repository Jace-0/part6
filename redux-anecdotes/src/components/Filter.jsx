import { useDispatch } from 'react-redux';
import{ onFilterChange } from '../reducers/filterReducer'
const Filter = (props) => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(onFilterChange(event.target.value));
    console.log(event.target.value)
  };
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter
      <input
        id="filter"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;