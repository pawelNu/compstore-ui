import { Routes, Route } from "react-router-dom";
import { links } from "../../config/links";
import { ShoppingCart } from "./ShoppingCart";

export const ShoppingCartPage = () => {
    return (
        <Routes>
            <Route path={links.shoppingCart} element={<ShoppingCart />} />
        </Routes>
    );
};
