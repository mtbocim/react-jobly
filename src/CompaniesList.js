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
    //TODO: name better
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
        setCompaniesPage(companiesData => (
            {
                ...companiesData,
                isLoading: true,
            }
        ));
        fetchCompaniesData();
    }, [filter]);

    function getFilterForSearch(searchTerm) {
        console.log('Search term is >>>>>>', searchTerm);
        setFilter(searchTerm);
    }
    // async function searchCompanies(searchTerm){

    // }

    if (isLoading) return <i>Loading...</i>

    return (
        <div className="CompaniesList">
            <SearchForm onSubmit={getFilterForSearch} />
            {companiesData.length === 0
                ? <p>No results found {filter !== '' && `for ${filter}.`}</p>
                : companiesData.map((c, idx) =>
                    // TODO: better key definition!! companyHandle should work
                    // TODO: explicitly pass named props instead of object?
                    <CompanyCard key={idx} companyData={c} />
                )}
        </div>
    )
}

export default CompaniesList;