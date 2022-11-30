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
 *              companiesData as [{company, title, description, imageUrl}, ...]
 *          }
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

    useEffect(function fetchCompaniesDataWhenMounted() {
        async function fetchCompaniesData() {
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
        fetchCompaniesData();
    }, [filter]);

    function getFilterForSearch(searchTerm) {
        console.log('Search term is >>>>>>', searchTerm);
        setCompaniesPage(companiesData => (
            {
                ...companiesData,
                isLoading: true,
            }
        ));
        setFilter(searchTerm);
    }

    if (isLoading) return <i>Loading...</i>

    return (
        <div className="CompaniesList">
            <SearchForm onSubmit={getFilterForSearch} />
            {companiesData.length === 0
                ? <p>No results found.</p>
                : companiesData.map((c, idx) =>
                    <CompanyCard key={idx} companyData={c} />
                )}
        </div>
    )
}

export default CompaniesList;