import { useContext, useEffect, useState } from 'react';
import { ColumnOptions, ComparisonOptions } from '../../utils/types';
import useForm from '../../hooks/useForm';
import { PlanetContext } from '../Provider';
import { columnFields, comparisoFields } from '../../utils/const';
import FilterList from '../filterList/FilterList';
import React from 'react';
import styles from './Filter.module.css';

const initialForm = {
  columnFilter: 'population' as ColumnOptions,
  comparisonFilter: 'maior que' as ComparisonOptions,
  valueFilter: '0',
};

function Filter() {
  const { filters: { filterList, addFilter } } = useContext(PlanetContext);
  const { form, handleChangeOnForm, resetForm } = useForm(initialForm);
  const [filteredColumns, setFilteredColumns] = useState(columnFields);

  const handleClick = () => {
    addFilter({
      column: form.columnFilter,
      comparison: form.comparisonFilter,
      value: Number(form.valueFilter),
    });
  };

  useEffect(() => {
    const filters = filterList.map((filter) => filter.column);
    const newColumns = columnFields.filter((field) => !filters.includes(field));
    setFilteredColumns(newColumns);
    resetForm({
      columnFilter: newColumns[0] as ColumnOptions,
      comparisonFilter: 'maior que' as ComparisonOptions,
      valueFilter: '0',
    });
  }, [filterList, resetForm]);

  return (
    <div className={styles.filterContainer}>
      <div>
        <select
          id="column-filter"
          name="columnFilter"
          value={form.columnFilter}
          onChange={handleChangeOnForm}
          className={styles.selectInput}
          data-testid="column-filter"
        >
          {filteredColumns.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        <select
          id="comparison-filter"
          name="comparisonFilter"
          value={form.comparisonFilter}
          onChange={handleChangeOnForm}
          className={styles.selectInput}
          data-testid="comparison-filter"
        >
          {comparisoFields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="valueFilter"
          value={form.valueFilter}
          onChange={handleChangeOnForm}
          className={styles.numberInput}
          data-testid="value-filter"
        />
        <button
          data-testid="button-filter"
          onClick={handleClick}
          className={styles.filterButton}
        >
          Filtrar
        </button>
      </div>
      <FilterList />
    </div>
  );
}

export default Filter;
