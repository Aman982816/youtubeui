import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { AllContextType, mycontext } from "../context/context";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const AllContextValues = useContext(mycontext);
  const loading = AllContextValues?.loading;
  const searchResults = AllContextValues?.searchResults;
  const selectedCategory = AllContextValues?.selectedCategory;

  return (
    <>
      <Header />
    </>
  );
}
