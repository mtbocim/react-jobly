import {Link} from 'react-router-dom';
import './CompanyCard.css';

/**
 * Renders a CompanyCard component
 *
 * State: none
 * Props: handle, name, description, logoUrl
 *
 * App -> RoutesList -> CompanyList -> CompanyCard
 */

function CompanyCard({ handle, name, description, logoUrl }) {
    //console.log("companyData>>>>>>>>", companyData)

    return (
        <Link to={`/companies/${handle}`}>
        <div
            className="CompanyCard"
        >

            <h3>{name}</h3>
            <p>{description}</p>
            {
                logoUrl !== null
                && <img
                    src={logoUrl}
                    alt={`${name} logo`}
                />
            }
        </div>
        </Link>
    )
}

export default CompanyCard;
