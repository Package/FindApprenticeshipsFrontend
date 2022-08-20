import React, { FC } from 'react'
import { Vacancy } from '../types'

interface VacancyEmployerProps {
    vacancy: Vacancy;
}

export const VacancyEmployer: FC<VacancyEmployerProps> = ({ vacancy }) => {
    return (
        <section className="vacancy-detail--section">
            <h3 className="vacancy-detail--header">Employer</h3>
            <ul>
                <li>
                    <h4>Employer name</h4>
                    {vacancy.employerName}
                </li>

                {vacancy.employerContactName && (
                    <li>
                        <h4>Employer contact name</h4>
                        {vacancy.employerContactName}
                    </li>
                )}

                {vacancy.employerContactPhone && (
                    <li>
                        <h4>Employer contact email</h4>
                        <a href={`mailto: ${vacancy.employerContactEmail}`}>
                            {vacancy.employerContactEmail}
                        </a>
                    </li>
                )}

                {vacancy.employerContactEmail && (
                    <li>
                        <h4>Employer contact phone</h4>
                        <a href={`tel: ${vacancy.employerContactPhone}`}>
                            {vacancy.employerContactPhone}
                        </a>
                    </li>
                )}

                {vacancy.employerWebsiteUrl && (
                    <li>
                        <h4>Employer website</h4>
                        <a href={vacancy.employerWebsiteUrl} target="_blank" rel="noreferrer noopener">
                            {vacancy.employerWebsiteUrl}
                        </a>
                    </li>
                )}
            </ul>
        </section>
    )
}
