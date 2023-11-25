"use strict";

import styles from "./SearchAndFilter.module.scss";

const SearchAndFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBy}>
        <label htmlFor="option">Search by: </label>
        <select name="option" id="option">
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchAndFilter;
