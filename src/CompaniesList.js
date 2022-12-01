import { useState, useEffect } from 'react'

import SearchForm from "./SearchForm";
import JoblyApi from './JoblyAPI';
import CompanyCard from './CompanyCard';

/**
 * Renders a CompaniesList component
 *
 * State: companiesPage
 *          {
 *              isLoaded: (bool)
 *              companiesData as [{company, title, description, logoUrl}, ...]
 *          }
 *
 *        filter: (str representing search term)
 *
 * Props: none
 *
 * App -> RoutesList -> CompaniesList
 *
 * companiesData populated by API request
 */

function CompaniesList() {
    const [companiesPage, setCompaniesPage] = useState({
        isLoading: true,
        companiesData: []
    });

    const [filter, setFilter] = useState('');

    const { isLoading, companiesData } = companiesPage;
    console.log("companiesData>>>>>>>", companiesData);
    console.log("filter is >>>>>>>>>>", filter);

    useEffect(function fetchCompaniesData() {
        async function getCompaniesData() {
            const companiesResult = filter === ''
                ? await JoblyApi.getCompanies()
                : await JoblyApi.getFilteredCompanies(filter);
            setCompaniesPage(
                {
                    isLoading: false,
                    companiesData: companiesResult
                }
            );
        }
        setCompaniesPage(companiesData => (
            {
                ...companiesData,
                isLoading: true,
            }
        ));
        getCompaniesData();
    }, [filter]);

    function getFilterForSearch(searchTerm) {
        console.log('Search term is >>>>>>', searchTerm);
        setFilter(searchTerm);
    }

    if (isLoading) return <i>Loading...</i>

    return (
        <div className="CompaniesList">
            <SearchForm onSubmit={getFilterForSearch} />
            {companiesData.length === 0
                ? <p>No results found {filter !== '' && `for ${filter}.`}</p>
                : companiesData.map((c, idx) =>
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                )}
        </div>
    )
}

export default CompaniesList;
