import React from "react";

const SearchResultsAll = ({ items, searchInformation }) => {
    return (
        <div className="search-results-all">
            <div className="container">
                <p>
                    About {searchInformation.formattedTotalResults} results in ({searchInformation.formattedSearchTime} seconds)
                </p>
                <div className="search-results-all-main">
                    {items.map((item, index) => (
                        <div className="result-item" key={index}>
                            <p>{item.formattedUrl}</p>
                            <a href={item.link} target="_blank">
                                {item.title}
                            </a>
                            <h2 dangerouslySetInnerHTML={{ __html: item.htmlSnippet }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsAll;
