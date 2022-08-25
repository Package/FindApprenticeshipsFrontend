import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react'
import { PageTitle } from '../components/PageTitle';
import { VacancyResultsList } from '../components/VacancyResultsList';
import { getAllVacancies } from '../services/vacancy-service';
import { Vacancy, SearchState } from '../types';

interface VacanciesPageProps {
  vacancies: Vacancy[];
}

const Vacancies: FC<VacanciesPageProps> = ({ vacancies }) => {
  return (
    <>
      <Head>
        <title>Find an apprenticeship</title>
      </Head>

      <div className="page">
        <PageTitle title="Find an apprenticeship" description="Search and apply for an apprenticeship in England" />

        <div className="container">
          <Link href="/search">
            <a className="page-navigation">
              Search Apprenticeships
            </a>
          </Link>

          <VacancyResultsList vacancies={vacancies} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const searchState: SearchState = {
    location: context.query.location as string || "",
    miles: Number.parseInt(context.query.miles as string) || 0,
    larsCode: context.query.larsCode as string || ""
  }

  console.log(searchState);

  return {
    props: {
      vacancies: await getAllVacancies(searchState)
    }
  }
}

export default Vacancies;
