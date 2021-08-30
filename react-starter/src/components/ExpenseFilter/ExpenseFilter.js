import React, {useState} from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

  // adding this to silence the warning, I only need the 2nd arg
  // eslint-disable-next-line
  const [filterYear, setFilterYear] = useState('');

  const filterYearChangeHandler = (event) => {
    setFilterYear(props.filterYear); // getting this back down after the change in a two-way bind
    console.log("Filtering by year:", event.target.value);
    props.onFilterChange(event.target.value); // sending data up
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={filterYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;