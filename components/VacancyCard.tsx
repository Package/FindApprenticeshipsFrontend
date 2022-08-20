import React, { FC } from 'react'
import { formatAddressLines } from '../services/address-service';
import { Vacancy } from '../types'
import Link from 'next/link';
import { formatDate } from '../services/date-service';

interface VacancyCardProps {
    vacancy: Vacancy;
}

export const VacancyCard: FC<VacancyCardProps> = ({ vacancy }) => {
    return (
        <div className="vacancy-card">
            <h3 className="vacancy-card--title">
                <Link href={`/vacancy?reference=${vacancy.vacancyReference}`}>
                    {vacancy.title}
                </Link>
            </h3>
            <div className="vacancy-card--course">{vacancy.course.route} {' > '} {vacancy.course.title}</div>
            <div className="vacancy-card--company">{vacancy.employerName}</div>
            <p className="vacancy-card--description">
                {vacancy.description}
            </p>
            <div className="vacancy-card--meta">
                <ul>
                    <li>
                        <strong>Location: </strong> {formatAddressLines(vacancy.address)}
                    </li>
                    <li>
                        <strong>Posted date: </strong> {formatDate(vacancy.postedDate)}
                    </li>
                    <li>
                        <strong>Closing date: </strong> {formatDate(vacancy.closingDate)}
                    </li>
                    <li>
                        <strong>Apprenticeship level: </strong> {vacancy.apprenticeshipLevel}
                    </li>
                    <li>
                        <strong>Wage: </strong> {vacancy.wage.wageAdditionalInformation}
                    </li>
                </ul>
            </div>
        </div>
    )
}
