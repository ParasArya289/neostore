import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { updateSearchParams } from "../../../HelperFunctions/filterParamsHelpers";
import { useFilterParams } from "../../contexts/filterParamsContext";
import "./Searchbar.css";

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { paramState, dispatchParams } = useFilterParams();
  useEffect(() => {
    if (location.pathname === "/products") {
      updateSearchParams(searchQuery, dispatchParams);
    } else if (location.pathname !== "/products") {
      if (searchQuery) {
        navigate(`/products`);
        updateSearchParams(searchQuery, dispatchParams);
      }
    }
  }, [searchQuery]);
  return (
    <>
      <input
        className="searchbar"
        type="search"
        placeholder="Search in Neostore"
        value={paramState.search}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </>
  );
};
