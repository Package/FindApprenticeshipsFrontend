import { Address } from "../types";

export function formatAddressLines(address: Address): string {
    let formattedAddress: string = '';

    if (address.addressLine1)
        formattedAddress += `${address.addressLine1}`;
    if (address.addressLine2)
        formattedAddress += `, ${address.addressLine2}`;
    if (address.addressLine3)
        formattedAddress += `, ${address.addressLine3}`;
    if (address.addressLine4)
        formattedAddress += `, ${address.addressLine4}`;
    if (address.postcode)
        formattedAddress += `, ${address.postcode}`

    return formattedAddress.trim();
}