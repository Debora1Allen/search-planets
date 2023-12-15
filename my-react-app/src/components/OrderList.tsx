import { useContext } from 'react';
import { PlanetContext } from './Provider';
import { columnFields } from '../utils/const';
import { Order } from '../utils/types';
import useForm from '../hooks/useForm';
import React from 'react';

function OrderFilter() {
  const { setOrder } = useContext(PlanetContext);
  const { form, handleChangeOnForm } = useForm({
    column: 'population', sort: '',
  } as Order);

  return (
    <div style={ { display: 'flex', alignItems: 'start' } }>
      <select
        name="column"
        id="sort-filter"
        onChange={ handleChangeOnForm }
        data-testid="column-sort"
      >
        {columnFields.map((field, i) => (
          <option key={ i } value={ field }>{field}</option>
        ))}
      </select>
      <div>
        <div>
          <input
            data-testid="column-sort-input-asc"
            id="asc-input"
            type="radio"
            name="sort"
            value="ASC"
            checked={ form.sort === 'ASC' }
            onChange={ handleChangeOnForm }
          />
          <label htmlFor="asc-input">Ascendente</label>
        </div>
        <div>
          <input
            data-testid="column-sort-input-desc"
            id="dsc-input"
            type="radio"
            name="sort"
            value="DESC"
            checked={ form.sort === 'DESC' }
            onChange={ handleChangeOnForm }
          />
          <label htmlFor="dsc-input">Descendente</label>
        </div>
        <button
          data-testid="column-sort-button"
          onClick={ () => setOrder(form) }
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default OrderFilter;