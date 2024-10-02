import { UUID } from "crypto";
import { TCartItem } from "../../../../redux/ShoppingCartProvider";

export const addToCartHandler = async (id: UUID, addToCart: (product: TCartItem) => void) => {
    try {
        addToCart({ product: id, quantity: 0 });
    } catch (e) {
        console.log("file: PCactions.ts   e:", e);
    }
};
