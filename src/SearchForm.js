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
    const [value, setValue] = useState('');
    console.log("what is value>>>>>>>>>", value)
    function handleChange(evt) {
        const { value } = evt.target;
        setValue(value);
    }

    function handleSubmit(evt) {
        console.log("Handle submit triggered");
        evt.preventDefault();
        onSubmit(value);
    }

    return (
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter search term..."
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;