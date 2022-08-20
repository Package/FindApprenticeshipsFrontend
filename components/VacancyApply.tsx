import React, { FC } from 'react'
import { Vacancy } from '../types';

interface VacancyApplyProps {
    vacancy: Vacancy;
}

export const VacancyApply: FC<VacancyApplyProps> = ({ vacancy }) => {
    return (
        <div className="vacancy-detail--apply">
            <a className="vacancy-detail--apply--button"
                href={`https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/${vacancy.vacancyReference}`} target="_blank" rel="noreferrer noopener">
                Apply for this Apprenticeship
            </a>
        </div>
    )
}
