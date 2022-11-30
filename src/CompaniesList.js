import { useState, useEffect } from 'react'

import SearchForm from "./SearchForm";
import JoblyApi from './JoblyAPI';

/**
 * Renders a CompaniesList component
 * 
 * State: isLoaded (bool)
 *        companiesData as [{company, title, description, imageUrl}, ...]
 * 
 * Props: none
 * 
 * App -> RoutesList -> CompaniesList
 * 
 * companiesData populated by API request
 */

function CompaniesList() {
    const [isLoaded, setIsLoaded] = useState({
        loading: true,
        companiesData: []
    });

    useEffect(function fetchCompaniesDataWhenMounted() {
        async function fetchCompaniesData() {
            const companiesResult = await JoblyApi.getCompanies();
            setIsLoaded((isLoaded) => (
                {
                    ...isLoaded,
                    loading: false,
                    companiesData: companiesResult
                }
            ));
        }
        fetchCompaniesData();
    }, []);

    const [loading, companiesData] = isLoaded;

    if(loading) return <i>Loading...</i>

    return (
        <div className="CompaniesList">
            <SearchForm />
            <p>CompaniesList</p>
        </div>
    )
}

export default CompaniesList;