import React, { useState } from "react";
import { pagination } from "../data";
import PaginatinoLogo from "../assets/images/google-pagination-logo.png";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Pagination = ({ query, startIndex }) => {
    const navigate = useNavigate();
    const decreasePage = (e) => {
        paginate(Number(startIndex) - 10);
    };
    const increasePage = (e) => {
        paginate(Number(startIndex) + 10);
    };
    const paginate = (startIndex) => {
        navigate(`/search?query=${query}&startIndex=${startIndex}`);
    };
    return (
        <div className="pagination">
            <div className="container">
                <div className="pagination-wrapper">
                    <img src={PaginatinoLogo} alt="" />
                    <div className="pagination-pages">
                        {startIndex > 1 && (
                            <div onClick={decreasePage}>
                                <BsChevronLeft className="pagination-icon left" />
                            </div>
                        )}
                        {pagination.map((item, index) => {
                            return (
                                <span onClick={() => paginate(item.startIndex)} className={startIndex === String(item.startIndex) ? "active" : ""} key={index}>
                                    {item.page}
                                </span>
                            );
                        })}
                        {startIndex < 91 && (
                            <div onClick={increasePage}>
                                <BsChevronRight className="pagination-icon right" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
