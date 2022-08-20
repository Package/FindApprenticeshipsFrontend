import React, { FC } from 'react'
import { Vacancy } from '../types'
import { VacancyDates } from './VacancyDates';
import { VacancyApply } from './VacancyApply';
import { VacancyIntro } from './VacancyIntro';
import { VacancyCourse } from './VacancyCourse';
import { VacancyEmployer } from './VacancyEmployer';
import { VacancyLocation } from './VacancyLocation';
import { VacancyWage } from './VacancyWage';
import { VacancyWorkingPattern } from './VacancyWorkingPattern';

interface VacancyDetailProps {
    vacancy: Vacancy;
}

export const VacancyDetail: FC<VacancyDetailProps> = ({ vacancy }) => {

    return (
        <div className="vacancy-detail">
            <VacancyIntro vacancy={vacancy} />

            <VacancyApply vacancy={vacancy} />

            <div className="vacancy-detail--sections">
                <VacancyDates vacancy={vacancy} />

                <VacancyLocation vacancy={vacancy} />

                <VacancyWage vacancy={vacancy} />

                <VacancyEmployer vacancy={vacancy} />

                <VacancyWorkingPattern vacancy={vacancy} />

                <VacancyCourse vacancy={vacancy} />
            </div>
        </div>
    )
}

