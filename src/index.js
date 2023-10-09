import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OpenModalProvider } from "./Context/OpenModalContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import { GetVideosProvider } from "./Context/GetVideosContext";
import { OpenNavProvider } from "./Context/ClickNavContext";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <OpenNavProvider>
      <OpenModalProvider>
        <GetVideosProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GetVideosProvider>
      </OpenModalProvider>
    </OpenNavProvider>
  </React.StrictMode>
);
