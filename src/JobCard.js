/**
 * Renders a card containing a job title and its details.
 *
 * State: none
 * Props: jobData as {title, salary, equity, companyHandle}
 *
 * JobCardList -> JobCard
 */

function JobCard({jobData, displayHandle=true}){
  return (
    <div className="JobCard">
      <h3>{jobData.title}</h3>
      {
        displayHandle
        && <p>{jobData.companyHandle}</p>
      }
      <p>Salary: {jobData.salary}</p>
      <p>Equity {jobData.equity}</p>
    </div>
  )
}

export default JobCard;
