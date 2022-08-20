import { NextPageContext } from 'next';
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
    <div className="page">
      <PageTitle title="Find an apprenticeship" description="Search and apply for an apprenticeship in England" />

      <div className="container">
        <VacancyResultsList vacancies={vacancies.slice(0, 10)} />
      </div>
    </div>
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
