import { useContext, useState } from 'react';
import { PlanetContext } from '../Provider';
import Filter from '../filter/Filter';
import OrderFilter from '../orderLIst/OrderList';
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
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            value={textFilter}
            onChange={({ target }) => setTextFilter(target.value)}
            className={styles.searchInput}
            data-testid="name-filter"
            placeholder="Search"
          />
          <div className={styles.searchIcon} data-testid="search-icon" />
        </div>
      </div>
    <div className={styles.pageContainer}>
      <Filter />
      <OrderFilter />
    </div>
      {isLoading ? <p>Loading...</p> : (
        <table  className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Name</th>
              <th className={styles.tableHeader}>Rotation period</th>
              <th className={styles.tableHeader}>Orbital period</th>
              <th className={styles.tableHeader}>Diameter</th>
              <th className={styles.tableHeader}>Climate</th>
              <th className={styles.tableHeader}>Gravity</th>
              <th className={styles.tableHeader}>Terrain</th>
              <th className={styles.tableHeader}>Surface water</th>
              <th className={styles.tableHeader}>Population</th>
              <th className={styles.tableHeader}>Films</th>
              <th className={styles.tableHeader}>Created</th>
              <th className={styles.tableHeader}>Edited</th>
              <th className={styles.tableHeader}>URL</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <th className={styles.tableCell} data-testid="planet-name">{planet.name}</th>
                <th className={styles.tableCell} >{planet.rotation_period}</th>
                <th className={styles.tableCell} >{planet.orbital_period}</th>
                <th className={styles.tableCell} >{planet.diameter}</th>
                <th className={styles.tableCell} >{planet.climate}</th>
                <th className={styles.tableCell} >{planet.gravity}</th>
                <th className={styles.tableCell} >{planet.terrain}</th>
                <th className={styles.tableCell} >{planet.surface_water}</th>
                <th className={styles.tableCell} >{planet.population}</th>
                <th className={styles.tableCell} >{planet.films}</th>
                <th className={styles.tableCell} >{planet.created}</th>
                <th className={styles.tableCell} >{planet.edited}</th>
                <th className={styles.tableCell} >{planet.url}</th>
              </tr>
            ))}
              {filteredPlanets.length === 0 && (
            <td className={styles.emptyRow}>Nenhum Planeta Encontrado</td>
        )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;