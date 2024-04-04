import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function FilterSection() {
  return (
    <div className='bg-gray-200 sticky top-0 shadow-sm dark:bg-gray-800 rounded-lg p-6 space-y-6'>
      <h2 className='text-lg font-bold'>Filters</h2>
      <div className='space-y-5'>
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='price-range'>
            Price Range
          </label>
          <div className='mt-2'>
            <Slider className='w-full' defaultValue={[50, 150]} id='price-range' max={200} min={0} step={10} />
          </div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='model'>
            Model
          </label>
          <div className='mt-1'>
            <Select defaultValue='all'>
              <SelectTrigger className='w-full' id='model'>
                <SelectValue placeholder='All Models' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Models</SelectItem>
                <SelectItem value='sedan'>Sedan</SelectItem>
                <SelectItem value='suv'>SUV</SelectItem>
                <SelectItem value='truck'>Truck</SelectItem>
                <SelectItem value='convertible'>Convertible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 dark:text-gray-300' htmlFor='year'>
            Year
          </label>
          <div className='mt-1'>
            <Select defaultValue='all'>
              <SelectTrigger className='w-full' id='year'>
                <SelectValue placeholder='All Years' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Years</SelectItem>
                <SelectItem value='2023'>2023</SelectItem>
                <SelectItem value='2022'>2022</SelectItem>
                <SelectItem value='2021'>2021</SelectItem>
                <SelectItem value='2020'>2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
