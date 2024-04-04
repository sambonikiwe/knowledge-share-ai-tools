import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CarCardProps } from '../component/props';

export function CarCard({ car }: CarCardProps) {
  return (
    <div className='bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
      <Link className='block' href={`/cars/${car.id}`} passHref>
        <Image
          alt={car.name}
          className='w-full h-48 object-cover'
          height={200}
          src={car.imageUrl}
          style={{
            aspectRatio: '300/200',
            objectFit: 'cover',
          }}
          width={300}
        />
        <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>{car.name}</h3>
          <p className='text-gray-500 dark:text-gray-400'>{car.summary}</p>
          <div className='mt-4 flex justify-between items-center'>
            <span className='text-xl font-semibold text-gray-900 dark:text-gray-100'>R {car.price}/day</span>
            <Button size='sm'>Rent it</Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
