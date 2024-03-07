import { TButtons } from "./ButtonWithIcon";
import { AddToCartIcon } from "../icons/addToCartIcon";
import { CartIcon } from "../icons/cartIcon";
import { FilterIcon } from "../icons/filterIcon";
import { PlusIcon } from "../icons/plusIcon";
import { links } from "../../config/links";

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
        icon: AddToCartIcon(),
    },
    filterPC: {
        title: "Filter",
        type: "submit",
        variant: "primary",
        icon: FilterIcon(),
    },
};
