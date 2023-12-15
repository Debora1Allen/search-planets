import { createContext, useState } from 'react';
import React from 'react';
import useFilter, { Filter } from '../hooks/useFilter';
import { type Order } from '../utils/types';

interface ContextType {
  filters: Filter;
  order: Order;
  setOrder: (order: Order) => void;
}

export const PlanetContext = createContext({} as ContextType);

function Provider({ children }: React.PropsWithChildren) {
  const [order, setOrder] = useState<Order>({ column: 'population', sort: '' });
  const filters = useFilter();

  return (
    <PlanetContext.Provider value={ { filters, order, setOrder } }>
      {children}
    </PlanetContext.Provider>
  );
}

export default Provider;