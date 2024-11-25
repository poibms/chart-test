import {parseCSV} from "../utils/csvParser.ts";

export const csvService = {

    async parce<T>(url: string): Promise<T[]> {
        return parseCSV<T>(url);
    }
}