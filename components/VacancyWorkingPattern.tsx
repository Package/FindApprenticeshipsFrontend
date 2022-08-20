import React, { FC } from 'react'
import { Vacancy } from '../types'

interface VacancyWorkingPatternProps {
    vacancy: Vacancy;
}

export const VacancyWorkingPattern: FC<VacancyWorkingPatternProps> = ({ vacancy }) => {
    return (
        <section className="vacancy-detail--section">
            <h3 className="vacancy-detail--header">Working pattern</h3>
            <p>
                {vacancy.wage.workingWeekDescription}
            </p>
            <ul>
                <li>
                    <h4>Hours per week</h4>
                    {vacancy.hoursPerWeek}
                </li>
                <li>
                    <h4>Expected duration</h4>
                    {vacancy.expectedDuration}
                </li>
            </ul>
        </section>
    )
}
