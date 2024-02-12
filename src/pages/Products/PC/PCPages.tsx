import { Route, Routes } from "react-router-dom";
import { links } from "../../../config/links";
import { ShoppingCart } from "../../ShoppingCart/ShoppingCart";
import { PCDetails } from "./PCDetails";
import { PCEdit } from "./PCEdit";
import { PCs } from "./PCs";

export const PCPages = () => {
    return (
        <Routes>
            <Route path={links.pcs} element={<PCs />} />
            <Route path={`${links.pcDetails}:id`} element={<PCDetails />} />
            <Route path={`${links.pcEdit}:id`} element={<PCEdit />} />
            <Route path={links.shoppingCart} element={<ShoppingCart />} />
        </Routes>
    );
};
