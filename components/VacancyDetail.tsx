import React, { FC } from 'react'
import { formatAddressLines } from '../services/address-service';
import { formatDate } from '../services/date-service';
import { Vacancy } from '../types'

interface VacancyDetailProps {
    vacancy: Vacancy;
}

export const VacancyDetail: FC<VacancyDetailProps> = ({ vacancy }) => {

    return (
        <div className="vacancy-detail">
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

            <div className="vacancy-detail--apply">
                <a className="vacancy-detail--apply--button" href={`https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/${vacancy.vacancyReference}`} target="_blank" rel="noreferrer noopener">
                    Apply for this Apprenticeship
                </a>
            </div>

            <section className="vacancy-detail--section">
                <h3 className="vacancy-detail--header">Location</h3>
                <address>
                    {vacancy.address.addressLine1 && (
                        <>{vacancy.address.addressLine1}<br /></>
                    )}
                    {vacancy.address.addressLine2 && (
                        <>{vacancy.address.addressLine2}<br /></>
                    )}
                    {vacancy.address.addressLine3 && (
                        <>{vacancy.address.addressLine3}<br /></>
                    )}
                    {vacancy.address.addressLine4 && (
                        <>{vacancy.address.addressLine4}<br /></>
                    )}
                    {vacancy.address.postcode && (
                        <>{vacancy.address.postcode}<br /></>
                    )}
                </address>

                <p>
                    <a target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/search/?api=1&query=${formatAddressLines(vacancy.address)}`}>
                        View on Maps
                    </a>
                </p>
            </section>

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

            <section className="vacancy-detail--section">
                <h3 className="vacancy-detail--header">Course</h3>
                <ul>
                    <li>
                        <h4>Course</h4>
                        {vacancy.course.title}
                    </li>
                    <li>
                        <h4>Course route</h4>
                        {vacancy.course.route}
                    </li>
                    <li>
                        <h4>Learning aim reference</h4>
                        {vacancy.course.larsCode}
                    </li>
                    <li>
                        <h4>Provider</h4>
                        {vacancy.providerName}
                    </li>
                    <li>
                        <h4>UKPRN</h4>
                        {vacancy.ukprn}
                    </li>
                </ul>
            </section>
        </div>
    )
}

