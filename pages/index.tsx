import { NextPageContext } from 'next';
import Head from 'next/head';
import React, { FC } from 'react'
import { PageTitle } from '../components/PageTitle';
import { VacancyResultsList } from '../components/VacancyResultsList';
import { getAllVacancies } from '../services/vacancy-service';
import { Vacancy } from '../types';

interface VacanciesPageProps {
  vacancies: Vacancy[];
}

const Vacancies: FC<VacanciesPageProps> = ({ vacancies }) => {
  return (
    <>
      <Head>
        <title>Find an Apprenticeship</title>
      </Head>

      <div className="page">
        <PageTitle title="Find an Apprenticeship" description="Search and apply for an apprenticeship in England" />

        <div className="container">
          <VacancyResultsList vacancies={vacancies} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      vacancies: getAllVacancies()
    }
  }
}

export default Vacancies;
