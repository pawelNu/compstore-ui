import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Navbar } from "./layout/Navbar";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { Products } from "./pages/Products/Products";
import { ShoppingCartButton } from "./pages/MainPage/components/ShoppingCartButton";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { AddNewProductForm } from "./forms/Products/AddNewProductForm";

export const App = () => {
    return (
        <div className="m-2">
            <Navbar />
            <div className="container px-0">
                <div className="d-flex justify-content-between">
                    <Baner />
                    <ShoppingCartButton />
                </div>
            </div>
            <CategoryBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/pcs" element={<Products />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route
                        path="/add-new-product"
                        element={<AddNewProductForm />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};
