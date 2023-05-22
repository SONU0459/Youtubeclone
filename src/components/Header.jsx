import Loader from "../shared/loader";
import React, { useContext, useState } from "react";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { CgClose } from "react-icons/cg";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden dark:md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="data:image/jpeg;base64,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" />
                </div>
            </div>
        </div>
    );
};

export default Header;
