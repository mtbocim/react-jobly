import {Link} from 'react-router-dom';
import './CompanyCard.css';

/**
 * Renders a CompanyCard component
 * 
 * State: none
 * Props: companyData as {handle, name, description, numEmployees, logoUrl}
 * 
 * App -> RoutesList -> CompanyList -> CompanyCard
 */

function CompanyCard({ companyData }) {
    //console.log("companyData>>>>>>>>", companyData)

    return (
        <Link to={`/companies/${companyData.handle}`}>
        <div 
            className="CompanyCard"
        >
    
            <h3>{companyData.name}</h3>
            <p>{companyData.description}</p>
            {
                companyData.logoUrl !== null
                && <img
                    src={companyData.logoUrl}
                    alt={`${companyData.name} logo`}
                />
            }
        </div>
        </Link>
    )
}

export default CompanyCard;