import { useContext } from 'react';
import { PlanetContext } from './Provider';
import React from 'react';

function FilterList() {
  const { filters } = useContext(PlanetContext);
  const { filterList, removeFilter, clearFilters } = filters;

  return (
    <div>
      <div>
        {filterList.map((filter) => (
          <div key={ filter.column } data-testid="filter" style={ { display: 'flex' } }>
            <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
            <button onClick={ () => removeFilter(filter.column) }>Remove filter</button>
          </div>
        ))}
      </div>
      <button
        onClick={ clearFilters }
        data-testid="button-remove-filters"
      >
        Remove all filters
      </button>
    </div>
  );
}

export default FilterList;