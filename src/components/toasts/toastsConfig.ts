import { Bounce, Slide, ToastContent } from "react-toastify";
import { ToastWithLink } from "./ToastWithLink";
import { links } from "../../config/links";

type ToastProps = {
    msg: ToastContent;
    props?: {
        position: "top-center";
        autoClose: number | false;
        hideProgressBar?: true | false;
        closeOnClick?: true | false;
        pauseOnHover?: true | false;
        draggable?: true | false;
        progress?: undefined;
        theme: "light" | "dark" | "colored";
        transition: typeof Bounce | typeof Slide;
    };
};

type AllToasts = {
    addToShoppingCart: ToastProps;
    addQuantityToShoppingCart: ToastProps;
    deleteFromShoppingCart: ToastProps;
    clearShoppingCart: ToastProps;
    addingOrder: ToastProps;
    deletingOrder: ToastProps;
};

export const defaultToastProps: ToastProps["props"] = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

export const toasts: AllToasts = {
    addToShoppingCart: {
        msg: () =>
            ToastWithLink({
                msg: "Added product to shopping cart ",
                direction: "Shopping Cart",
                link: links.shoppingCart,
            }),
    },
    addQuantityToShoppingCart: {
        msg: () =>
            ToastWithLink({
                msg: "Added product QUANTITY + 1 to shopping cart ",
                direction: "Shopping Cart",
                link: links.shoppingCart,
            }),
    },
    deleteFromShoppingCart: {
        msg: "Deleted product from shopping cart",
    },
    clearShoppingCart: {
        msg: "All products have been deleted from the cart!",
    },
    addingOrder: {
        msg: "Order was successfully created!",
    },
    deletingOrder: {
        msg: "Order was successfully deleted!",
    },
};
