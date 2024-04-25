import css from './Filter.module.css';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
      className={css.filterInput}
    />
  );
};