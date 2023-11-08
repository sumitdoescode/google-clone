import { SearchHeader, SearchResults, SearchResultsAll, SearchResultsImages, Pagination } from "../components";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const startIndex = searchParams.get("startIndex");
    return (
        <section className="search-section">
            <SearchHeader />
            <SearchResults query={query} startIndex={startIndex} />
            <Pagination query={query} startIndex={startIndex} />
        </section>
    );
};

export default Search;
