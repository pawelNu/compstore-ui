import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage"

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
