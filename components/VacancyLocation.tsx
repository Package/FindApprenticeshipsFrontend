import React, { FC } from 'react'
import { formatAddressLines } from '../services/address-service';
import { Vacancy } from '../types'

interface VacancyLocationProps {
    vacancy: Vacancy;
}

export const VacancyLocation: FC<VacancyLocationProps> = ({ vacancy }) => {
    return (
        <section className="vacancy-detail--section">
            <h3 className="vacancy-detail--header">Location</h3>
            <address>
                {vacancy.address.addressLine1 && (
                    <>{vacancy.address.addressLine1}<br /></>
                )}
                {vacancy.address.addressLine2 && (
                    <>{vacancy.address.addressLine2}<br /></>
                )}
                {vacancy.address.addressLine3 && (
                    <>{vacancy.address.addressLine3}<br /></>
                )}
                {vacancy.address.addressLine4 && (
                    <>{vacancy.address.addressLine4}<br /></>
                )}
                {vacancy.address.postcode && (
                    <>{vacancy.address.postcode}<br /></>
                )}
            </address>

            <p>
                <a target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/search/?api=1&query=${formatAddressLines(vacancy.address)}`}>
                    View on Maps
                </a>
            </p>
        </section>
    )
}
