import JobCard from "./JobCard.js";

/**
 * Renders a list of JobCards
 *
 * State: none
 * Props: 
 *    jobs as [{title, salary, equity, companyName (optionally defined)}, ...]
 *
 * Currently used by: JobList, CompanyDetail
 */

function JobCardList({ jobs }) {
  console.log("jobs>>>>>>>>>>>>>>>>>", jobs);
  return (
    <div className="JobCardList">
      {jobs.map((j, i) =>
        //TODO: use ID for key
        <JobCard jobData={j} key={i} />)}
    </div>
  )
}

export default JobCardList;
