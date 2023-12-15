import { useQuery } from '@tanstack/react-query';
import { Planet } from '../utils/types';

export interface PlanetQuery {
  data: Planet[];
  isLoading: boolean;
}
const fetchApi = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/planets');
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const apiData = await response.json();
    return apiData.results.map((planet: any) => {
      const { residents, ...rest } = planet;
      return rest;
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


function usePlanets(): PlanetQuery {
  const { data, isLoading } = useQuery({
    queryKey: ['planets'],
    queryFn: fetchApi,
  });

  return {
    data,
    isLoading,
  };
}

export default usePlanets;