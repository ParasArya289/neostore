import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContext } from "./frontend/contexts/dataContext";
import { AuthContextProvider } from "./frontend/contexts/authContext";
import { FilterParamsContextProvider } from "./frontend/contexts/filterParamsContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <AuthContextProvider>
          <FilterParamsContextProvider>
            <App />
          </FilterParamsContextProvider>
        </AuthContextProvider>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
