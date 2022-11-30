import { useState } from "react";

/**
 * Renders a search form.
 * 
 * State: value of input
 * Props: callback to use upon submit
 * 
 * Currently rendered by: JobList, CompanyList
 */

function SearchForm({ onSubmit }) {
    const [value, setValue] = useState();

    function handleChange(evt) {
        const { value } = evt.target;
        setValue(value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        
    }

    return (
        <div className="SearchForm">
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter search term..."
                />
                <button
                    onSubmit={onSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SearchForm;