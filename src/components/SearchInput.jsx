import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchInput = ({ query }) => {
    const [searchQuery, setSearchQuery] = useState(query ? query : "");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim().length) {
            const input = document.querySelector("input");
            // unfocus the input after submitting the form
            input.blur();
            navigate(`/search?query=${searchQuery.trim()}&startIndex=1`);
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search here.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
    );
};

export default SearchInput;
