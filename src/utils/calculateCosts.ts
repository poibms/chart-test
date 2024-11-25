import { Usage } from '../types/entities/usage.interface.ts';
import { Cost } from '../types/entities/cost.interface.ts';
import { IFilteredData } from '../types/entities/filteredData.interface.ts';

export const calculateCosts = (usages: Usage[], costs: Cost[]): IFilteredData[] => {
    const aggregatedData: Record<string, IFilteredData> = {};

    usages.forEach((usage) => {
        const costForUsage = costs.find(
          (cost) => cost.model === usage.model
        );

        if (costForUsage) {
            const date = usage.created_at.split(' ')[0];
            const key = `${date}-${usage.type}-${usage.model}`;

            const totalInputCost = usage.usage_input * costForUsage.input;
            const totalOutputCost = usage.usage_output * costForUsage.output;

            const totalCost = totalInputCost + totalOutputCost;

            if (!aggregatedData[key]) {
                aggregatedData[key] = {
                    date,
                    totalCost,

                };
            } else {
                aggregatedData[key].totalCost += totalCost;
            }
        }
    });

    return Object.values(aggregatedData);
};
