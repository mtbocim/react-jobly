import { useState } from "react";

/**
 * Renders a search form.
 * 
 * State: value of input
 * Props: callback to use upon submit
 * 
 */

function SearchForm({ onSubmit }) {
    const [value, setValue] = useState();



    return (
        <div className="SearchForm">
            <form>
                <input
                    type="text"
                    value={value}
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