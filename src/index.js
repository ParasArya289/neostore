import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContext } from "./frontend/contexts/dataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataContext>
    <App />
    </DataContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
