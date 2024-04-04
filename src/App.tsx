import { NavbarStore } from "./layout/navbar/NavbarStore";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { ButtonWithIcon } from "./components/buttons/ButtonWithIcon";
import { buttons } from "./components/buttons/buttonsConfig";
import { useShoppingCart } from "./redux/ShoppingCartProvider";
import { Routes, Route } from "react-router-dom";
import { links } from "./config/links";
import { ProcessorBrandNew } from "./pages/Admin/ComboData/ProcessorBrandNew";
import { ProcessorBrands } from "./pages/Admin/ComboData/ProcessorBrands";
import { ProcessorBrandsEdit } from "./pages/Admin/ComboData/ProcessorBrandsEdit";
import { MainPage } from "./pages/MainPage/MainPage";
import { AddNewProductForm } from "./pages/Products/AddNewProductForm";
import { PCDetails } from "./pages/Products/PC/PCDetails";
import { PCEdit } from "./pages/Products/PC/PCEdit";
import { PCs } from "./pages/Products/PC/PCs";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <Route path={links.mainPage} element={<MainPage />} />
                <Route path={links.shoppingCart} element={<ShoppingCart />} />
                <Route path={links.pcs} element={<PCs />} />
                <Route path={`${links.pcDetails}:id`} element={<PCDetails />} />
                <Route path={`${links.pcEdit}:id`} element={<PCEdit />} />
                <Route path={links.shoppingCart} element={<ShoppingCart />} />
                <Route path={links.addNewProduct} element={<AddNewProductForm />} />
                <Route path={links.processorBrands} element={<ProcessorBrands />} />
                <Route path={`${links.processorBrandsEdit}:id`} element={<ProcessorBrandsEdit />} />
                <Route path={links.processorBrandsNew} element={<ProcessorBrandNew />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
};
