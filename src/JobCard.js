import './JobCard.css'

/**
 * Renders a card containing a job title and its details.
 *
 * State: none
 * Props: title, salary, equity, companyName (optionally defined)
 *
 * Currently called by: {JobList, CompanyDetail} -> JobCardList -> JobCard
 */

function JobCard({ title, companyName=undefined, salary, equity }) {
  return (
    <div className="JobCard">
      <h3>{title}</h3>
      {
        companyName !== undefined
        && <p>{companyName}</p>
      }
      {
        salary !== null
        && <p>Salary: {salary}</p>
      }
      <p>Equity {equity}</p>
    </div>
  )
}

export default JobCard;
