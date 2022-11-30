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
    
    const {isLoading, companiesData} = companiesPage;
    //console.log("companiesData>>>>>>>", companiesData);
    
    useEffect(function fetchCompaniesDataWhenMounted() {
        async function fetchCompaniesData() {
            const companiesResult = await JoblyApi.getCompanies();
            setCompaniesPage(
                {
                    isLoading: false,
                    companiesData: companiesResult
                }
            );
        }
        fetchCompaniesData();
    }, [isLoading]);


    if(isLoading) return <i>Loading...</i>

    return (
        <div className="CompaniesList">
            <SearchForm />
            {companiesData.map((c,idx)=>
                <CompanyCard key={idx} companyData={c}/>
            )}
        </div>
    )
}

export default CompaniesList;