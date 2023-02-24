import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import ytLogo from "../public/images/yt-logo.png";
import ytLogoMobile from "../public/images/yt-logo-mobile.png";

import { mycontext } from "../context/context";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "./Loader";
const Header = () => {
  const AllContextValues = useContext(mycontext);
  const loading = AllContextValues?.loading;
  const setLoading = AllContextValues?.setLoading;
  const searchResults = AllContextValues?.searchResults;
  const selectedCategory = AllContextValues?.selectedCategory;
  const mobileMenu = AllContextValues?.mobileMenu;
  const setMobileMenu = AllContextValues?.setMobileMenu;

  const [searchQuery, setSearchQuery] = useState("");
  //   const navigate = useNavigate();
  const router = useRouter();

  const searchQueryHandler = (event: any) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      router.push(`/searchResult/${searchQuery}`);
    }
  };

  const pageName = "video";
  const mobileMenuToggle = () => {
    setMobileMenu && setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    // setLoading && setLoading(true);
  }, []);

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-1 md:px-4 md:px-5 bg-black dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center ">
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

        <Link href={"/"} className="flex h-5 w-10 md:w-16 items-center">
          <Image
            className="h-full hidden md:block dark:md:block"
            src={ytLogo}
            alt="logo"
          />
          <Image className="h-full md:hidden" src={ytLogoMobile} alt="Gulabi" />
        </Link>
      </div>
      <div className="group flex items-center ">
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
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center text-black justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
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
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
