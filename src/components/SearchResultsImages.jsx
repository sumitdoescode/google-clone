import React from "react";

const SearchResultsImages = ({ items }) => {
    return (
        <div className="search-results-images">
            <div className="search-images-wrapper">
                {items && items.length > 0 ? (
                    items.map((item, index) => {
                        return (
                            item.pagemap?.cse_image?.[0].src && (
                                // only render the image and its details when the item has an image or don't render it
                                <div className="search-image" key={index} onClick={() => window.open(item.formattedUrl)}>
                                    <img src={item.pagemap?.cse_image?.[0].src} alt="" />
                                    <div>
                                        <p>{item.displayLink}</p>
                                        <h1>{item.title}</h1>
                                    </div>
                                </div>
                            )
                        );
                    })
                ) : (
                    <h1>No images found</h1>
                )}
            </div>
        </div>
    );
};

export default SearchResultsImages;
