import { ISelectOptions } from '../types/entities/filteredData.interface.ts';

export const transformDataToSelectType = (data: string[]): ISelectOptions[] => {
  return data.map((dt) => {
    return {
      label: dt,
      value: dt
    }
  })
}