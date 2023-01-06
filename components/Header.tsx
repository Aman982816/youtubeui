import React, { useContext, useState } from "react";
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

        <Link href={"/"} className="flex h-5 items-center">
          <Image
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="logo"
          />
          <Image className="h-full md:hidden" src={ytLogoMobile} alt="Gulabi" />
        </Link>
      </div>
      hello
    </div>
  );
};

export default Header;
