import { ConfirmAlertProp } from "../components/alerts/ConfirmAlert";

type AllAlerts = {
    addToShoppingCart: ConfirmAlertProp;
    addQuantityToShoppingCart: ConfirmAlertProp;
    deleteFromShoppingCart: ConfirmAlertProp;
    clearShoppingCart: ConfirmAlertProp;
    addingOrder: ConfirmAlertProp;
};

export const alerts: AllAlerts = {
    addToShoppingCart: {
        message: "Added product to shopping cart",
        variant: "success",
    },
    addQuantityToShoppingCart: {
        message: "Added product QUANTITY + 1 to shopping cart",
        variant: "success",
    },
    deleteFromShoppingCart: {
        message: "Deleted product from shopping cart",
        variant: "success",
    },
    clearShoppingCart: {
        message: "All products have been deleted from the cart!",
        variant: "success",
    },
    addingOrder: {
        message: "Order was successfully created!",
        variant: "info",
    },
};
