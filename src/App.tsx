import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NavbarStore } from "./layout/NavbarStore";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { ShoppingCartButton } from "./pages/MainPage/components/ShoppingCartButton";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { AddNewProductForm } from "./pages/Products/AddNewProductForm";
import { PCDetails } from "./pages/Products/PC/PCDetails";
import { PCs } from "./pages/Products/PC/PCs";

export const App = () => {
    const [userRole, setUserRole] = useState("Customer");

    const handleUserRoleChange = (role: string) => {
        setUserRole(role);
    };

    return (
        <div className="m-2">
            <NavbarStore
                onUserRoleChange={handleUserRoleChange}
                userRole={userRole}
            />
            <div className="container px-0">
                <div className="d-flex justify-content-between">
                    <Baner />
                    <ShoppingCartButton />
                </div>
            </div>
            <CategoryBar />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/pcs" element={<PCs userRole={userRole} />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route
                    path="/add-new-product"
                    element={<AddNewProductForm />}
                />
                <Route path="/pc/:id" element={<PCDetails />} />
            </Routes>

            <Footer />
        </div>
    );
};
