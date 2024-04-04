import { CarCard } from './car-card';
import { FilterSection } from '../filters';
import { getCars } from '@/lib/db';

export function CarsList() {
  const cars = getCars();
  return (
    <div className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8'>
      <FilterSection />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}
