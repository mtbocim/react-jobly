import {useParams} from 'react-router-dom';
import {React, useState, useEffect} from 'react'
import JoblyApi from './JoblyAPI';

/**
 * Renders a CompanyDetail component
 * 
 * State: companyDetailPage
 *          {
 *              isLoaded: (bool)
 *              companyData:
 *                  {
 *                      description, 
 *                      handle, 
 *                      jobs:[], 
 *                      name, 
 *                      numEmployees
 *                  }
 *          }
 * 
 * Props: none
 * 
 * App -> RoutesList -> CompanyDetail
 * 
 * companyData populated by API request
 */

function CompanyDetail(){
    const params = useParams();
    //console.log("params =", params)

    const [companyDetailPage, setCompanyDetailPage] = useState({
        isLoading: true,
        companyData: []
    });
    
    const {isLoading, companyData} = companyDetailPage;
    console.log("companyData>>>>>>>", companyData);
    
    useEffect(function fetchCompanyDataWhenMounted() {
        async function fetchCompanyData() {
            const companyResult = await JoblyApi.getCompany(params.handle);
            setCompanyDetailPage(
                {
                    isLoading: false,
                    companyData: companyResult
                }
            );
        }
        fetchCompanyData();
    }, []);
    
    if(isLoading) return <i>Loading...</i>
    
    return(
        <div className="CompanyDetail">
            <h3>{companyData.name}</h3>
            <p>{companyData.description}</p>
            <p>CompanyDetail</p>
        </div>
    )
}

export default CompanyDetail;