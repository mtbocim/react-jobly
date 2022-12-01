import { Route, Routes, Navigate } from "react-router-dom";
import CompanyDetail from "./CompanyDetail.js";
import CompaniesList from "./CompaniesList.js";
import JobsList from "./JobsList.js";
import Homepage from "./Homepage.js";

/**
 * Renders a RoutesList component.
 * 
 * State: none
 * Props: none
 * 
 * App -> RoutesList
 */

function RoutesList() {
    return (
        <div className="RoutesList">
            <Routes>
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/companies" element={<CompaniesList />} />
                <Route path="/jobs" element={<JobsList />} />
                <Route path="/login" element="" />
                <Route path="/signup" element="" />
                <Route path="/profile" element="" />
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default RoutesList;