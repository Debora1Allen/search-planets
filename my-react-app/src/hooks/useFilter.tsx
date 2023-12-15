import { useState } from 'react';
import { ColumnOptions, FilterOption } from '../utils/types';

export interface Filter {
  filterList: FilterOption[];
  addFilter: (filter: FilterOption) => void;
  removeFilter: (column: ColumnOptions) => void;
  clearFilters: () => void;
}

function useFilter(): Filter {
  const [filterList, setFilters] = useState<FilterOption[]>([]);

  const addFilter = (newFilter: FilterOption) => {
    setFilters([...filterList, newFilter]);
  };

  const removeFilter = (column: ColumnOptions) => {
    setFilters(filterList.filter((f) => f.column !== column));
  };

  const clearFilters = () => setFilters([]);

  return { filterList, addFilter, removeFilter, clearFilters };
}

export default useFilter;