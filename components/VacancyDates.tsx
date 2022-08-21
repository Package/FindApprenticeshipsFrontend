import React, { FC } from 'react'
import { formatDate } from '../services/date-service';
import { Vacancy } from '../types'

interface VacancyDatesProps {
    vacancy: Vacancy;
}

export const VacancyDates: FC<VacancyDatesProps> = ({ vacancy }) => {
    return (
        <section className="vacancy-detail--section">
            <h3 className="vacancy-detail--header">Dates</h3>
            <ul>
                <li>
                    <h4>Posted date</h4>
                    {formatDate(vacancy.postedDate)}
                </li>

                <li>
                    <h4>Closing date</h4>
                    {formatDate(vacancy.closingDate)}
                </li>

                <li>
                    <h4>Start date</h4>
                    {formatDate(vacancy.startDate)}
                </li>

                <li>
                    <h4>Number of positions</h4>
                    {vacancy.numberOfPositions} position(s)
                </li>
            </ul>
        </section>
    )
}
