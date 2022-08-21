import { NextPageContext } from 'next';
import Head from 'next/head';
import React, { FC } from 'react'
import { PageTitle } from '../components/PageTitle';
import { VacancyDetail } from '../components/VacancyDetail';
import { getVacancyByReference } from '../services/vacancy-service';
import { Vacancy } from '../types'

interface VacancyDetailsPageProps {
    vacancy: Vacancy;
}

const VacancyDetails: FC<VacancyDetailsPageProps> = ({ vacancy }) => {
    return (
        <>
            <Head>
                <title>{vacancy.title} | Find an Apprenticeship</title>
            </Head>

            <div className="page">
                <PageTitle title="Find an apprenticeship" description="Search and apply for an apprenticeship in England" />

                <div className="container">
                    <VacancyDetail vacancy={vacancy} />
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context: NextPageContext) {
    const vacancyReference = context.query.reference as string;

    return {
        props: {
            vacancy: await getVacancyByReference(vacancyReference)
        }
    }
}

export default VacancyDetails;