import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { TIDNameType } from "../types/PC/TPC";
import { UUID } from "crypto";

export type TCartItem = {
    id: UUID;
    processorBrand: TIDNameType;
    processorName: string;
    graphicsCardBrand: TIDNameType;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: TIDNameType;
    price: number;
};

type ShoppingCartContextType = {
    shoppingCartList: TCartItem[];
    addToCart: (product: TCartItem) => void;
    clearCart: () => void;
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
    const [shoppingCartList, setShoppingCartList] = React.useState<TCartItem[]>(
        () => {
            const storedList = localStorage.getItem("shoppingCart");
            return storedList ? JSON.parse(storedList) : [];
        },
    );

    console.log("file: ShoppingCartProvider.tsx:35   list:", shoppingCartList);

    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
    }, [shoppingCartList]);

    const addToCart = (product: TCartItem) => {
        setShoppingCartList((prevList) => [...prevList, product]);
    };

    const clearCart = () => {
        setShoppingCartList([]);
    };

    return (
        <ShoppingCartContext.Provider
            value={{ shoppingCartList, addToCart, clearCart }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
