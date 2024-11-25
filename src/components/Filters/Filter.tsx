import React, { memo } from 'react';
import Select from 'react-select';
import { IFiltersConfig } from '../../types/entities/filteredData.interface.ts';

const Filter: React.FC<IFiltersConfig> = memo(({ options, label, value, onChange }) => {
  const allOption = { label: `All ${label}`, value: '' };
  const updatedOptions = [allOption, ...options];

  return (
    <label className="flex flex-col text-sm font-medium text-gray-700">
      <span className="mb-1">{label}</span>
      <Select
        value={updatedOptions.find((option) => option.value === value)}
        onChange={(selectedOption) => {
          onChange((selectedOption as { value: string }).value);
        }}
        options={updatedOptions}
        className="w-52 text-gray-800"
        classNamePrefix="custom-select"
        isSearchable={false}
      />
    </label>
  );
});

export default Filter;
