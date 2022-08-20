import React, { FC } from 'react'
import { Vacancy } from '../types'
import { VacancyCard } from './VacancyCard';

interface VacancyResultsListProps {
    vacancies: Vacancy[];
}

export const VacancyResultsList: FC<VacancyResultsListProps> = ({ vacancies }) => {
    return (
        <div className="vacancy-list">
            {vacancies.map((vacancy: Vacancy) =>
                <VacancyCard vacancy={vacancy} key={vacancy.vacancyReference} />
            )}
        </div>
    )
}
