import {useState, useEffect} from 'react';
import JobCardList from './JobCardList';

import JoblyApi from "./JoblyAPI";
import SearchForm from "./SearchForm";

/**
 * Renders a JobsList component
 * 
 * State: isLoaded (bool)
 *        jobsData as [
 *                      {
 *                          title, 
 *                          description, 
 *                          salary, 
 *                          equity, 
 *                          companyHandle (optional)
 *                      }, 
 *                      ...
 *                    ]
 * Props: none
 * 
 * App -> RoutesList -> JobsList
 * 
 * jobsData populated by API request
 */

function JobsList(){
    const [jobsListPage, setJobsListPage] = useState({
        isLoading:true,
        jobsListData: []
    });
    
    const {isLoading, jobsListData} = jobsListPage;
    console.log("jobsListData>>>>>>>>",jobsListData);

    useEffect(function fetchJobsListDataWhenMounted(){
        async function fetchJobsListData(){
            const jobsList = await JoblyApi.getJobs();
            setJobsListPage(
                {
                    isLoading: false,
                    jobsListData: jobsList,
                }
            );
        }
        fetchJobsListData();
    }, []);

    if(isLoading) return <i>Loading...</i>

    return(
        <div className="JobsList">
            <SearchForm/>
            <JobCardList jobs={jobsListData}/>
        </div>
    )
}

export default JobsList;