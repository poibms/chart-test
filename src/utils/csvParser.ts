import Papa from "papaparse";

export const parseCSV = async <T>(url: string): Promise<T[]> => {
    return fetch(url)
        .then((response) => response.text())
        .then((text) =>
            new Promise<T[]>((resolve, reject) => {
                Papa.parse<T>(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => resolve(result.data as T[]),
                    error: (error: Error | Papa.ParseError) => {
                        if ('message' in error) {
                            console.error("Parsing error: ", error.message);
                        } else {
                            console.error("Unknown error occurred");
                        }
                        reject(error);

                    },
                });
            })
        );
};
