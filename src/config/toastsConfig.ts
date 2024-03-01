import { Bounce, Slide } from "react-toastify";

type ToastProps = {
    msg: string;
    props: {
        position: "top-center";
        autoClose: number;
        hideProgressBar: true | false;
        closeOnClick: true | false;
        pauseOnHover: true | false;
        draggable: true | false;
        progress: undefined;
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
};

const defaultProps: ToastProps["props"] = {
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
        msg: "Added product to shopping cart",
        props: defaultProps,
    },
    addQuantityToShoppingCart: {
        msg: "Added product QUANTITY + 1 to shopping cart",
        props: defaultProps,
    },
    deleteFromShoppingCart: {
        msg: "Deleted product from shopping cart",
        props: defaultProps,
    },
    clearShoppingCart: {
        msg: "All products have been deleted from the cart!",
        props: defaultProps,
    },
    addingOrder: {
        msg: "Order was successfully created!",
        props: defaultProps,
    },
};
