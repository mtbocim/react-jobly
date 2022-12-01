import JobCard from "./JobCard.js";

/**
 * Renders a list of JobCards
 *
 * State: none
 * Props:
 *    jobs as [{id, title, salary, equity, companyName (optionally defined)}, ...]
 *
 * Currently used by: JobList, CompanyDetail
 */

function JobCardList({ jobs }) {
  console.log("jobs>>>>>>>>>>>>>>>>>", jobs);
  return (
    <div className="JobCardList">
      {jobs.map(j =>
        <JobCard
          title = {j.title}
          companyName = {j.companyName}
          salary = {j.salary}
          equity = {j.equity}
          key={j.id}
        />)}
    </div>
  )
}

export default JobCardList;
