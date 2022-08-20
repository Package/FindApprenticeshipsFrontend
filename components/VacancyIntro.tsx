import React, { FC } from 'react'
import { Vacancy } from '../types'

interface VacancyIntroProps {
    vacancy: Vacancy;
}

export const VacancyIntro: FC<VacancyIntroProps> = ({ vacancy }) => {
    return (
        <>
            <h1 className="vacancy-detail--title">{vacancy.title}</h1>
            <p className="vacancy-detail--subtitle">
                {vacancy.employerName}
            </p>

            <p>
                {vacancy.description}
            </p>
        </>
    )
}
