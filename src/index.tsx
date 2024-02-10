import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./redux/ErrorProvider";
import { ShoppingCartProvider } from "./redux/ShoppingCartProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        {/* <ErrorProvider> */}
            <BrowserRouter>
                <ShoppingCartProvider>
                    <App />
                </ShoppingCartProvider>
            </BrowserRouter>
        {/* </ErrorProvider> */}
    </React.StrictMode>,
);
