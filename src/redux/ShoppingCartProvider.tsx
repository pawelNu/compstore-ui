import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { UUID } from "crypto";
import { renderAlert } from "../components/alerts/ConfirmAlert";
import { alerts } from "../config/alertsConfig";

export type TCartItem = {
    id: UUID;
    details: string[];
    price: number;
    quantity: number;
};

type TShoppingCartList = TCartItem[];

type ShoppingCartContextType = {
    shoppingCartList: TShoppingCartList;
    shoppingListCount: number;
    addToCart: (product: TCartItem) => void;
    deleteFromCart: (id: UUID) => void;
    clearCart: () => void;
    reduceProductQuantity: (id: UUID) => void;
    increaseProductQuantity: (id: UUID) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCart = (): ShoppingCartContextType => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error(
            "useShoppingCart must be used within a ShoppingCartProvider ",
        );
    }
    return context;
};

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [shoppingCartList, setShoppingCartList] =
        React.useState<TShoppingCartList>(() => {
            const storedList = localStorage.getItem("shoppingCart");
            return storedList ? JSON.parse(storedList) : [];
        });

    console.log(
        "file: ShoppingCartProvider.tsx:43   shoppingCartList:",
        shoppingCartList,
    );

    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
    }, [shoppingCartList]);

    const checkProductIndex = (id: UUID): number => {
        const productIndex = shoppingCartList.findIndex(
            (item) => item.id === id,
        );
        return productIndex;
    };

    const shoppingListCount = shoppingCartList.length;

    const addToCart = (product: TCartItem) => {
        const productIndex = checkProductIndex(product.id);

        if (productIndex === -1) {
            setShoppingCartList((prevList) => [
                ...prevList,
                { ...product, quantity: 1 },
            ]);
            renderAlert(alerts.addToShoppingCart);
        } else {
            const updatedList = [...shoppingCartList];
            updatedList[productIndex].quantity += 1;
            setShoppingCartList(updatedList);
            renderAlert(alerts.addQuantityToShoppingCart);
        }
    };

    const deleteFromCart = (id: UUID) => {
        const productIndex = checkProductIndex(id);

        if (productIndex !== -1) {
            const updatedList = [...shoppingCartList];
            updatedList.splice(productIndex, 1);
            setShoppingCartList(updatedList);
            renderAlert(alerts.deleteFromShoppingCart);
        } else {
            console.log(
                "Not found product in shopping cart! ",
                shoppingCartList[productIndex],
            );
        }
    };

    const changeProductQuantity = (id: UUID, directionChange: number) => {
        const productIndex = checkProductIndex(id);

        if (productIndex !== -1) {
            const updatedList = [...shoppingCartList];
            updatedList[productIndex].quantity = Math.max(
                0,
                updatedList[productIndex].quantity + 1 * directionChange,
            );
            setShoppingCartList(updatedList);
        }
    };

    const reduceProductQuantity = (id: UUID) => {
        const directionChange = -1;
        changeProductQuantity(id, directionChange);
    };

    const increaseProductQuantity = (id: UUID) => {
        const directionChange = 1;
        changeProductQuantity(id, directionChange);
    };

    const clearCart = () => {
        setShoppingCartList([]);
        renderAlert(alerts.clearShoppingCart);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCartList,
                shoppingListCount,
                addToCart,
                deleteFromCart,
                clearCart,
                reduceProductQuantity,
                increaseProductQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};