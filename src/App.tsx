import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Navbar } from "./layout/Navbar";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { Products } from "./pages/Products/Products";

export const App = () => {
    return (
        <div className="m-2">
            <Navbar />
            <Baner />
            <CategoryBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/pcs" element={<Products />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};
