import React from "react";
import ReactDOM from "react-dom/client";
import Playground from "./Playground";
import reportWebVitals from "./reportWebVitals";
import Logo from "./logo.svg";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <header>
            <img src={Logo} alt="logo" />
            <h1>React Playground</h1>
        </header>
        <main>
            <Playground />
        </main>
    </React.StrictMode>
);

reportWebVitals();
