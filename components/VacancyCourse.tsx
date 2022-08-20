import React, { FC } from 'react'
import { Vacancy } from '../types'

interface VacancyCourseProps {
    vacancy: Vacancy;
}

export const VacancyCourse: FC<VacancyCourseProps> = ({ vacancy }) => {
    return (
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
    )
}
