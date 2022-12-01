import './JobCard.css'

/**
 * Renders a card containing a job title and its details.
 *
 * State: none
 * Props: jobData as returned by API call
 *    {id, title, salary, equity, companyName (optionally defined)}
 *
 * Currently called by: {JobList, CompanyDetail} -> JobCardList -> JobCard
 */

function JobCard({ jobData }) {
  console.log("jobData=", jobData);
  return (
    <div className="JobCard">
      <h3>{jobData.title}</h3>
      {
        jobData.companyName !== undefined
        && <p>{jobData.companyName}</p>
      }
      {
        jobData.salary !== null
        && <p>Salary: {jobData.salary}</p>
      }
      <p>Equity {jobData.equity}</p>
    </div>
  )
}

export default JobCard;
