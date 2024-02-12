import { Route, Routes } from "react-router-dom";
import { NavbarStore } from "./layout/navbar/NavbarStore";
import { Baner } from "./pages/MainPage/components/Baner";
import { CategoryBar } from "./pages/MainPage/components/CategoryBar";
import { Footer } from "./layout/Footer";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ButtonWithIcon } from "./components/buttons/ButtonWithIcon";
import { buttons } from "./config/buttonsConfig";
import { useShoppingCart } from "./redux/ShoppingCartProvider";
import { Pages } from "./components/Pages";
import { links } from "./config/links";

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
            <Pages />
            <Footer />
        </div>
    );
};
