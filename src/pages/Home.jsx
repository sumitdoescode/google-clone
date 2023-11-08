import React, { useEffect } from "react";
import Logo from "../assets/images/google-logo.png";
import SearchInput from "../components/SearchInput";
import { useApp } from "../contexts/AppContext";

const Home = () => {
    const { setCategory } = useApp();
    useEffect(() => {
        setCategory("All");
    }, []);
    return (
        <section className="home-section">
            <div className="container">
                <div className="home">
                    <img src={Logo} alt="" />
                    <SearchInput />
                </div>
            </div>
        </section>
    );
};

export default Home;
