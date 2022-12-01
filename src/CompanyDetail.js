import {useParams} from 'react-router-dom';
import {React, useState, useEffect} from 'react'
import JoblyApi from './JoblyAPI';
import JobCardList from "./JobCardList.js";

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
    const {handle} = useParams();
    //console.log("params =", params)

    const [companyDetailPage, setCompanyDetailPage] = useState({
        isLoading: true,
        companyData: []
    });

    const {isLoading, companyData} = companyDetailPage;
    console.log("companyData>>>>>>>", companyData);

    useEffect(function fetchCompanyDataWhenMounted() {
        async function fetchCompanyData() {
            const companyResult = await JoblyApi.getCompany(handle);
            setCompanyDetailPage(
                {
                    isLoading: false,
                    companyData: companyResult
                }
            );
        }
        fetchCompanyData();
    }, [handle]);

    if(isLoading) return <i>Loading...</i>

    return(
        <div className="CompanyDetail">
            <h3>{companyData.name}</h3>
            <p>{companyData.description}</p>
            <JobCardList jobs={companyData.jobs} />
        </div>
    )
}

export default CompanyDetail;
