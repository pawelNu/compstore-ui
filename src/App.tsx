import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NavbarStore } from "./layout/navbar/NavbarStore";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { AddNewProductForm } from "./pages/Products/AddNewProductForm";
import { PCDetails } from "./pages/Products/PC/PCDetails";
import { PCs } from "./pages/Products/PC/PCs";
import { PCEdit } from "./pages/Products/PC/PCEdit";
import { ProcessorBrands } from "./pages/ComboData/ProcessorBrands";
import { ProcessorBrandsEdit } from "./pages/ComboData/ProcessorBrandsEdit";
import { links } from "./config/links";
import { ProcessorBrandNew } from "./pages/ComboData/ProcessorBrandNew";
import { ButtonWithIcon } from "./components/buttons/ButtonWithIcon";
import { buttons } from "./config/buttonsConfig";
import { useShoppingCart } from "./redux/ShoppingCartProvider";

export const App = () => {
    const { shoppingListCount } = useShoppingCart();

    return (
        <div className="m-2">
            <NavbarStore />
            <div className="container px-0">
                <div className="d-flex justify-content-between">
                    <Baner />
                    <ButtonWithIcon
                        config={buttons.shoppingCart}
                        badgeValue={shoppingListCount}
                        badgeVariant="danger"
                    />
                </div>
            </div>
            <CategoryBar />

            <Routes>
                {/* TODO create pages with routes 
                        for each products separate component
                        PCPage, LaptopPages, TVPages, ProcessorBrandPages, AdminPages
                        */}
                <Route path={links.mainPage} element={<MainPage />} />
                <Route path={links.pcs} element={<PCs />} />
                <Route path={`${links.pcDetails}:id`} element={<PCDetails />} />
                <Route path={`${links.pcEdit}:id`} element={<PCEdit />} />
                <Route path={links.shoppingCart} element={<ShoppingCart />} />
                <Route
                    path={links.addNewProduct}
                    element={<AddNewProductForm />}
                />
                <Route
                    path={links.processorBrands}
                    element={<ProcessorBrands />}
                />
                <Route
                    path={`${links.processorBrandsEdit}:id`}
                    element={<ProcessorBrandsEdit />}
                />
                <Route
                    path={links.processorBrandsNew}
                    element={<ProcessorBrandNew />}
                />
            </Routes>
            <Footer />
        </div>
    );
};
