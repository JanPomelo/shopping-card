"use strict";

import styles from "./SearchAndFilter.module.scss";
import SearchAndFilterProps from "./SearchAndFilterProps";

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBy}>
        <button className={styles.searchBut} onClick={onSearch}>
          Search
        </button>
        <input type="text" placeholder="Character Name" id="inputSearch" />
      </div>
    </div>
  );
};

export default SearchAndFilter;
