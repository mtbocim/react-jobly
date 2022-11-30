import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation.js";
import CompanyDetail from "./CompanyDetail.js";
import CompaniesList from "./CompaniesList.js";
import JobList from "./JobList.js";

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
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/companies/:handle" element={<CompanyDetail/>} />
                    <Route path="/companies" element={<CompaniesList/>} />
                    <Route path="/jobs" element={<JobList/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RoutesList;