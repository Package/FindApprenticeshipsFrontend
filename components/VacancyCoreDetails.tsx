import React, { FC } from 'react'
import { formatDate } from '../services/date-service';
import { Vacancy } from '../types'

interface VacancyCoreDetailsProps {
    vacancy: Vacancy;
}

export const VacancyCoreDetails: FC<VacancyCoreDetailsProps> = ({ vacancy }) => {
    return (
        <>
            <h1 className="vacancy-detail--title">{vacancy.title}</h1>
            <p className="vacancy-detail--subtitle">
                {vacancy.employerName}
            </p>

            <p>
                {vacancy.description}
            </p>
            <ul>
                <li>
                    <h4>Closing date</h4>
                    {formatDate(vacancy.closingDate)}
                </li>

                <li>
                    <h4>Number of positions</h4>
                    {vacancy.numberOfPositions}
                </li>
            </ul>

        </>
    )
}
