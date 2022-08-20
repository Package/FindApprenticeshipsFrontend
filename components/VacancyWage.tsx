import React, { FC } from 'react'
import { Vacancy } from '../types'

interface VacancyWageProps {
    vacancy: Vacancy;
}

export const VacancyWage: FC<VacancyWageProps> = ({ vacancy }) => {
    return (
        <section className="vacancy-detail--section">
            <h3 className="vacancy-detail--header">Wages</h3>
            <ul>
                <li>
                    <h4>Wage</h4>
                    {vacancy.wage.wageAdditionalInformation}
                </li>
                <li>
                    <h4>Wage type</h4>
                    {vacancy.wage.wageType}
                </li>
                <li>
                    <h4>Wage unit</h4>
                    {vacancy.wage.wageUnit}
                </li>
            </ul>
        </section>
    )
}
