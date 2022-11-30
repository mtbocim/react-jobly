import JobCard from "./JobCard.js";

/**
 * Renders a list of JobCards
 *
 * State: none
 * Props: jobs as [{title, salary, equity, companyHandle (optionally defined)}, ...]
 *
 * Currently used by: JobList, CompanyDetail
 */

function JobCardList({jobs}){

  return (
    <div className="JobCardList">
      {jobs.map((j, i) =>
      <JobCard jobData={j} key={i}/>)}
    </div>
  )
}

export default JobCardList;
