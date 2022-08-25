import { ApiPostCodeResponse } from "../types";

export async function convertPostCodeToLatLng(postCode: string): Promise<{ lat: number, lon: number }> {
    const request = await fetch(`https://findthatpostcode.uk/postcodes/${postCode}.json`);
    const response: ApiPostCodeResponse = await request.json();

    return response.data.attributes.location;
}