import React, { useEffect, useState } from 'react';
import { calculateCosts } from './utils/calculateCosts';
import Chart from './components/Chart';
import { Usage } from './types/entities/usage.interface.ts';
import { Cost } from './types/entities/cost.interface.ts';
import { IFilteredData } from './types/entities/filteredData.interface.ts';
import { csvService } from './service/parseCSV.service.ts';
import { getChartFiltersConfig } from './config/chartFiltersConfig.ts';
import FiltersWrapper from './components/Filters/FiltersWrapper.tsx';

const App: React.FC = () => {
  const [usages, setUsages] = useState<Usage[]>([]);
  const [costs, setCosts] = useState<Cost[]>([]);
  const [filteredData, setFilteredData] = useState<IFilteredData[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  useEffect(() => {
    Promise.all([
      csvService.parce<Usage>('/src/static/usages.csv'),
      csvService.parce<Cost>('/src/static/costs.csv'),
    ]).then(([usagesData, costsData]) => {
      setUsages(usagesData);
      setCosts(costsData);
      setFilteredData(calculateCosts(usagesData, costsData));
    });
  }, []);

  useEffect(() => {
    const filtered = usages.filter((usage) => {
      return (
        (selectedType ? usage.type === selectedType : true) &&
        (selectedModel ? usage.model === selectedModel : true)
      );
    });
    setFilteredData(calculateCosts(filtered, costs));
  }, [selectedType, selectedModel, usages, costs]);

  const filtersConfig = getChartFiltersConfig(
    usages,
    selectedType,
    selectedModel,
    setSelectedType,
    setSelectedModel
  );

  return (
    <div className={'flex flex-col gap-4 h-full w-full items-center px-40'}>
      <h1 className={'mb-[20px]'}>Usage Costs</h1>
      <FiltersWrapper filtersConfig={filtersConfig}/>
      <Chart
        data={filteredData.map((item) => ({
          date: item.date,
          totalCost: Number(item.totalCost.toFixed(2)),
        }))}
      />
    </div>
  );
};

export default App;
