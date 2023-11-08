import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Logo from "../assets/images//google-logo.png";
import { menu } from "../data";
import { SearchInput } from "./";
import { useApp } from "../contexts/AppContext";

const SearchHeader = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const startIndex = searchParams.get("startIndex");
    const { category, setCategory } = useApp();

    const navigate = useNavigate();

    const onClickHandler = (menuItem) => {
        const { name } = menuItem;
        if (name === "All") {
            setCategory("All");
            navigate(`/search?query=${query}&startIndex=1`);
        }
        if (name === "Images") {
            setCategory("Images");
            navigate(`/search?query=${query}&startIndex=1`);
        }
    };
    return (
        <div className="search-header">
            <div className="container">
                <div className="search-top">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <SearchInput query={query} />\
                </div>
                <ul className="search-menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className={category === menuItem.name ? "active" : ""} onClick={() => onClickHandler(menuItem)}>
                            <span className="menuItem-icon">{menuItem.icon}</span>
                            <span className="menuItem-text">{menuItem.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchHeader;
