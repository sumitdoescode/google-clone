import { useState, useEffect } from "react";
import { apiKey, cxKey } from "../constants";
import axios from "axios";
import { SearchResultsAll, SearchResultsImages } from "./index";
import { useApp } from "../contexts/AppContext";

const SearchResults = ({ query, startIndex }) => {
    const { category, setCategory } = useApp();
    const [data, setData] = useState(null);
    const getSearchResults = async () => {
        try {
            const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${query}&start=${startIndex}`;
            const res = await axios(url);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getSearchResults();
    }, [query, category, startIndex]);
    if (!data) return;
    const { items, searchInformation } = data;
    return <>{data && (category === "All" ? <SearchResultsAll items={items} searchInformation={searchInformation} /> : <SearchResultsImages items={items} />)}</>;
};

export default SearchResults;
