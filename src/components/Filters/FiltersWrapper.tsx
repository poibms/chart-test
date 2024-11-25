import React from 'react';
import Filter from './Filter.tsx';
import { IFiltersConfig } from '../../types/entities/filteredData.interface.ts';

interface IFiltersWrapperProps {
  filtersConfig: IFiltersConfig[];
}

const FiltersWrapper: React.FC<IFiltersWrapperProps> = ({ filtersConfig }) => {
  return (
    <>
      <div className={'flex gap-4 w-full'}>
        {filtersConfig.map((filter) => (
          <Filter
            key={filter.label}
            label={filter.label}
            options={filter.options}
            value={filter.value}
            onChange={filter.onChange}
          />
        ))}
      </div>
    </>
  );
};

export default FiltersWrapper;
