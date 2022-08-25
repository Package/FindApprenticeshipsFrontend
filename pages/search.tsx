import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { PageTitle } from '../components/PageTitle';
import { SearchForm } from '../components/SearchForm';
import { SearchState } from '../types';

interface SearchPageProps { }

const SearchPage: FC<SearchPageProps> = () => {
    const router = useRouter();

    async function onSearch(state: SearchState) {
        let url = `/?`;

        if (state.location)
            url += `location=${state.location}&`
        if (state.miles)
            url += `miles=${state.miles}&`;
        if (state.larsCode)
            url += `larsCode=${state.larsCode}`;

        router.push(url);
    }

    return (
        <>
            <Head>
                <title>Find an apprenticeship</title>
            </Head>

            <div className="page">
                <PageTitle title="Find an apprenticeship" description="Search and apply for an apprenticeship in England" />

                <div className="container">
                    <SearchForm onSearch={onSearch} />
                </div>
            </div>
        </>
    )
}

export default SearchPage;