import { TButtons } from "../components/buttons/ButtonWithIcon";
import { AddToCartIcon } from "../components/icons/addToCartIcon";
import { CartIcon } from "../components/icons/cartIcon";
import { FilterIcon } from "../components/icons/filterIcon";
import { PlusIcon } from "../components/icons/plusIcon";
import { links } from "./links";

type AllButtons = {
    addNewProcessorBrand: TButtons;
    shoppingCart: TButtons;
    addToCart: TButtons;
    filterPC: TButtons;
};

export const buttons: AllButtons = {
    addNewProcessorBrand: {
        title: "Add new processor brand",
        variant: "primary",
        divClassName: "mb-3",
        link: links.processorBrandsNew,
        icon: PlusIcon(),
    },
    shoppingCart: {
        title: "Cart",
        variant: "primary",
        divClassName: "d-flex align-items-center justify-content-center pe-2",
        link: links.shoppingCart,
        icon: CartIcon(),
    },
    addToCart: {
        title: "Add to cart",
        variant: "primary",
        divClassName: "ms-3",
        // link: links.mainPage,
        icon: AddToCartIcon(),
    },
    filterPC: {
        title: "Filter",
        type: "submit",
        variant: "primary",
        icon: FilterIcon(),
    },
};
