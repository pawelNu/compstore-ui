import { AdminPages } from "../pages/Admin/AdminPages";
import { FrontPage } from "../pages/MainPage/FrontPage";
import { PCPages } from "../pages/Products/PC/PCPages";
import { ShoppingCartPage } from "../pages/ShoppingCart/ShoppingCartPage";

export const Pages = () => {
    return (
        <>
            <FrontPage />
            <ShoppingCartPage />
            <PCPages />
            <AdminPages />
        </>
    );
};
