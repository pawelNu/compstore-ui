import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NavbarStore } from "./layout/navbar/NavbarStore";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { ShoppingCartButton } from "./pages/MainPage/components/ShoppingCartButton";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { AddNewProductForm } from "./pages/Products/AddNewProductForm";
import { PCDetails } from "./pages/Products/PC/PCDetails";
import { PCs } from "./pages/Products/PC/PCs";
import { PCEdit } from "./pages/Products/PC/PCEdit";
import { ProcessorBrands } from "./pages/ComboData/ProcessorBrands";
import { ProcessorBrandsEdit } from "./pages/ComboData/ProcessorBrandsEdit";
import { links } from "./config/links";

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
                <Route path={links.mainPage} element={<MainPage />} />
                <Route path={links.pcs} element={<PCs userRole={userRole} />} />
                <Route path={`${links.pcDetails}:id`} element={<PCDetails />} />
                <Route path={`${links.pcEdit}:id`} element={<PCEdit />} />
                <Route path={links.shoppingCart} element={<ShoppingCart />} />
                <Route
                    path={links.addNewProduct}
                    element={<AddNewProductForm />}
                />
                <Route path={links.processorBrands} element={<ProcessorBrands />} />
                <Route path={`${links.processorBrandsEdit}:id`} element={<ProcessorBrandsEdit />} />
            </Routes>
            <Footer />
        </div>
    );
};
