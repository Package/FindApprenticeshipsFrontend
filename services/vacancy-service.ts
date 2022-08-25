import { ApiVacancyResponse, SearchState, Vacancy } from "../types";

export async function getAllVacancies(searchState: SearchState): Promise<Vacancy[]> {
    const url = `${process.env.API_URL}/vacancy?PageSize=100`;
    const response = await fetch(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.API_KEY as string,
            'X-Version': process.env.API_VERSION as string
        }
    });
    const data: ApiVacancyResponse = await response.json();

    return data.vacancies;
}

export async function getVacancyByReference(reference: string): Promise<Vacancy> {
    const url = `${process.env.API_URL}/vacancy/${reference}`;
    const response = await fetch(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.API_KEY as string,
            'X-Version': process.env.API_VERSION as string
        }
    });

    return await response.json() as Vacancy;
}