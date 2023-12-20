import { useContext } from 'react';
import { PlanetContext } from '../Provider';
import React from 'react';
import styles from './FilterList.module.css';

function FilterList() {
  const { filters } = useContext(PlanetContext);
  const { filterList, removeFilter, clearFilters } = filters;

  return (
    <div className={styles.filterContainer}>
      <div>
        {filterList.map((filter) => (
          <div key={filter.column} className={styles.filterItem} data-testid="filter">
            <p className={styles.filterText}>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
            <button onClick={() => removeFilter(filter.column)} className={styles.removeFilterButton}>
              Remove filter
            </button>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className={styles.clearFiltersButton} data-testid="button-remove-filters">
        Remover Filtros
      </button>
    </div>
  );
}

export default FilterList;
