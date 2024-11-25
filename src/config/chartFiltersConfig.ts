import { Usage } from '../types/entities/usage.interface';
import { IFiltersConfig } from '../types/entities/filteredData.interface.ts';
import { transformDataToSelectType } from '../utils/select.ts';

export const getChartFiltersConfig = (
  usages: Usage[],
  selectedType: string,
  selectedModel: string,
  setSelectedType: (value: string) => void,
  setSelectedModel: (value: string) => void
): IFiltersConfig[] => [
  {
    label: 'Type',
    options: transformDataToSelectType([...new Set(usages.map((usg) => usg.type))]),
    value: selectedType,
    onChange: setSelectedType,
  },
  {
    label: 'Model',
    options: transformDataToSelectType([...new Set(usages.map((usg) => usg.model))]),
    value: selectedModel,
    onChange: setSelectedModel,
  },
];
