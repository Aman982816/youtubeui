import React, { createContext, useState, useContext, useEffect } from "react";

export type AllContextType = {
  loading: boolean | null;
  setLoading: (Theme: boolean) => void;
  searchResults: string[] | null | undefined;
  setSearchResults: (custom: string[]) => void;
  selectedCategory: string | null | undefined;
  setSelectedCategory: (anywhatyouwant: string) => void;
  mobileMenu: boolean | null;
  setMobileMenu: (kuchBhi: boolean) => void;
};

// import { fetchDataFromApi } from "../utils/api";

//creating context with typescript
export const mycontext = createContext<AllContextType | null>(null);

export const AppContext = (props: any) => {
  const [loading, setLoading] = useState<boolean | null>(false);
  const [searchResults, setSearchResults] = useState<string[] | null>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "New"
  );
  const [mobileMenu, setMobileMenu] = useState<boolean | null>(false);

  //   useEffect(() => {
  //     fetchSelectedCategoryData(selectedCategory);
  //   }, [selectedCategory]);

  //   const fetchSelectedCategoryData = (query) => {
  //     setLoading(true);
  //     fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
  //       console.log(contents);
  //       setSearchResults(contents);
  //       setLoading(false);
  //     });
  //   };

  return (
    <mycontext.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
        setSearchResults,
      }}
    >
      {props.children}
    </mycontext.Provider>
  );
};

//instead of taking the useContext api in an children we are calling it here and exporting for furture use
// export const useAppContext = () => useContext(mycontext);
