// OrderFilter.jsx

import React from 'react';
import { useContext } from 'react';
import { PlanetContext } from '../Provider';
import { columnFields } from '../../utils/const';
import { Order } from '../../utils/types';
import useForm from '../../hooks/useForm';
import styles from './OrderFilter.module.css';

function OrderFilter() {
  const { setOrder } = useContext(PlanetContext);
  const { form, handleChangeOnForm } = useForm({
    column: 'population', sort: '',
  } as Order);

  return (
    <div className={styles.checkboxContainer}>
      <div className={styles.checkboxGroup}>
        <select
        className={styles.selectInput}
          name="column"
          id="sort-filter"
          onChange={handleChangeOnForm}
          data-testid="column-sort"
        >
          {columnFields.map((field, i) => (
            <option key={i} value={field}>
              {field}
            </option>
          ))}
        </select>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxGroup}>
            <input
              data-testid="column-sort-input-asc"
              id="asc-input"
              type="radio"
              name="sort"
              value="ASC"
              checked={form.sort === 'ASC'}
              onChange={handleChangeOnForm}
              className={styles.checkboxInput}
            />
            <label htmlFor="asc-input" className={styles.checkboxLabel}>
              Ascendente
            </label>
          </div>
          <div className={styles.checkboxGroup}>
            <input
              data-testid="column-sort-input-desc"
              id="dsc-input"
              type="radio"
              name="sort"
              value="DESC"
              checked={form.sort === 'DESC'}
              onChange={handleChangeOnForm}
              className={styles.checkboxInput}
            />
            <label htmlFor="dsc-input" className={styles.checkboxLabel}>
              Descendente
            </label>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          data-testid="column-sort-button"
          onClick={() => setOrder(form)}
          className={styles.orderButton}
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default OrderFilter;
