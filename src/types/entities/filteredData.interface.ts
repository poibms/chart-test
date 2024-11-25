export interface IFilteredData{
    date: string
    totalCost: number;
}

export interface IFiltersConfig {
    label: string;
    options: ISelectOptions[];
    value: string;
    onChange: (value: string) => void;
}

export interface ISelectOptions {
    label: string;
    value: string;
}