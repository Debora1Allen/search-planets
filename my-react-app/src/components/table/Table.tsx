import { useContext, useState } from 'react';
import { PlanetContext } from '../Provider';
import Filter from '../Filter';
import OrderFilter from '../OrderList';
import usePlanets from '../../hooks/usePlanets';
import React from 'react';
import styles from './Table.module.css';


function Table() {
  const planets = usePlanets();
  const { filters, order } = useContext(PlanetContext);
  const [textFilter, setTextFilter] = useState('');

  const { data, isLoading } = planets;
  const { filterList } = filters;

  const filteredByName = isLoading ? [] : data.filter((planet) => {
    return planet.name.toLowerCase().includes(textFilter.toLowerCase());
  });

  const filteredPlanets = filteredByName
    .filter((planet) => filterList
      .every((filter) => {
        switch (filter.comparison) {
          case 'igual a': return Number(planet[filter.column]) === filter.value;
          case 'menor que': return Number(planet[filter.column]) < filter.value;
          default: return Number(planet[filter.column]) > filter.value;
        }
      }))
    .sort((a, b) => {
      if (a[order.column] === 'unknown') return 1;
      if (b[order.column] === 'unknown') return -1;
      if (order.sort === 'ASC') return Number(a[order.column]) - Number(b[order.column]);
      if (order.sort === 'DESC') return Number(b[order.column]) - Number(a[order.column]);
      return 1;
    });

  return (
    <div className={styles.tableContainer}>
      <div className={styles.filterContainer}>
        <input
          type="text"
          value={ textFilter }
          onChange={ ({ target }) => setTextFilter(target.value) }
          data-testid="name-filter"
        />
      </div>
      <div className={styles.background} style={ { display: 'flex', gap: '2rem' } }>
        <Filter />
        <OrderFilter />
      </div>
      {isLoading ? <p>Loading...</p> : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation period</th>
              <th>Orbital period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <th data-testid="planet-name">{planet.name}</th>
                <th>{planet.rotation_period}</th>
                <th>{planet.orbital_period}</th>
                <th>{planet.diameter}</th>
                <th>{planet.climate}</th>
                <th>{planet.gravity}</th>
                <th>{planet.terrain}</th>
                <th>{planet.surface_water}</th>
                <th>{planet.population}</th>
                <th>{planet.films}</th>
                <th>{planet.created}</th>
                <th>{planet.edited}</th>
                <th>{planet.url}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;