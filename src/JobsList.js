import { useState, useEffect } from 'react';
import JobCardList from './JobCardList';

import JoblyApi from "./JoblyAPI";
import SearchForm from "./SearchForm";

/**
 * Renders a JobsList component
 * 
 * State: 
 *      jobListPage
 *      {
 *        isLoaded: (bool)
 *        jobsData: [{
 *                      title, 
 *                      description, 
 *                      salary, 
 *                      equity, 
 *                      companyHandle (optional)
 *                   }, ...]
 *       }
 * 
 *       filter: (str representing search term)
 * 
 * Props: none
 * 
 * App -> RoutesList -> JobsList
 * 
 * jobsData populated by API request
 */

function JobsList() {
    const [jobsListPage, setJobsListPage] = useState({
        isLoading: true,
        jobsListData: []
    });

    const [filter, setFilter] = useState('');

    const { isLoading, jobsListData } = jobsListPage;
    console.log("jobsListData>>>>>>>>", jobsListData);

    useEffect(function fetchJobsListDataWhenMounted() {
        async function fetchJobsListData() {
            const jobsList = filter === ''
                ? await JoblyApi.getJobs()
                : await JoblyApi.getFilteredJobs(filter);
            setJobsListPage(
                {
                    isLoading: false,
                    jobsListData: jobsList,
                }
            );
        }
        setJobsListPage(jobListData => (
            {
                ...jobListData,
                isLoading: true,
            }
        ));
        fetchJobsListData();
    }, [filter]);

    function getFilterForSearch(searchTerm) {
        console.log('Search term is >>>>>>', searchTerm);
     
        setFilter(searchTerm);
    }

    if (isLoading) return <i>Loading...</i>

    return (
        <div className="JobsList">
            <SearchForm onSubmit={getFilterForSearch} />
            {jobsListData.length === 0
                ? <p>No results found {filter !== '' && `for ${filter}.`}</p>
                : <JobCardList jobs={jobsListData} />
            }
        </div>
    )
}

export default JobsList;