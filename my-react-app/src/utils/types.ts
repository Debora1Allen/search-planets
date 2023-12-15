export interface Planet {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    films: string[],
    created: string,
    edited: string,
    url: string
  }
  
  export type ColumnOptions = 'population' |
  'orbital_period' | 'diameter' | 'rotation_period' | 'surface_water';
  
  export type ComparisonOptions = 'maior que' | 'menor que' | 'igual a';
  
  export type FilterOption = {
    column: ColumnOptions,
    comparison: ComparisonOptions,
    value: number;
  };
  
  export interface Order {
    column: ColumnOptions;
    sort: 'ASC' | 'DESC' | '';
  }