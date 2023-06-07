import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { initState } from "../SideBar/SideBar";
import "./Searchbar.css";
const obj = initState;
export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (location.pathname === "/products") {
      setSearchParams({ ...obj, search: searchQuery });
    } else if (location.pathname !== "/products") {
      if (searchQuery) {
        navigate(`/products`);
      }
    }
  }, [searchQuery]);
  return (
    <>
      <input
        className="searchbar"
        type="search"
        placeholder="Search in Neostore"
        value={searchParams.get("search")}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};
