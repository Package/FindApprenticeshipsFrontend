import { ApiVacancyResponse, SearchState, Vacancy } from "../types";
import { convertPostCodeToLatLng } from "./postcode-service";

export async function getAllVacancies(searchState: SearchState): Promise<Vacancy[]> {
    const url = await buildRequestUrl(searchState);
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

async function buildRequestUrl(searchState: SearchState): Promise<string> {
    let url = `${process.env.API_URL}/vacancy?PageSize=100`;

    // Apply filter by location
    if (searchState.location && searchState.miles) {
        const latLngPair = await convertPostCodeToLatLng(searchState.location);

        url += `&Lat=${latLngPair.lat}&Lon=${latLngPair.lon}`;
        url += `&DistanceInMiles=${searchState.miles}`;
        url += `&Sort=DistanceAsc`
    }

    // Apply filter by specific learning aim
    if (searchState.larsCode) {
        url += `&StandardLarsCode=${searchState.larsCode}`;
    }

    return url;
}