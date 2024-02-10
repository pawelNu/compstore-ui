import { UUID } from "crypto";
import React, { useEffect } from "react";
import {
    createContext,
    useState,
    useContext,
    FC,
    ReactNode,
} from "react";

type ShoppingCartContextType = {
    list: UUID[];
    addToCart: (id: UUID) => void;
    clearCart: () => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCart = (): ShoppingCartContextType => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error("useError must be used within a ShoppingCartProvider ");
    }
    return context;
};

export const ShoppingCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [list, setList] = React.useState<UUID[]>(() => {
        // Sprawdź, czy istnieją informacje o koszyku w lokalnym magazynie
        const storedList = localStorage.getItem("shoppingCart");
        return storedList ? JSON.parse(storedList) : [];
    });

    console.log("file: ShoppingCartProvider.tsx:35   list:", list)

    useEffect(() => {
        // Zapisz aktualną listę do lokalnego magazynu po zmianie
        localStorage.setItem("shoppingCart", JSON.stringify(list));
    }, [list]);

    const addToCart = (id: UUID) => {
        setList((prevList) => [...prevList, id]);
    };

    const clearCart = () => {
        setList([]);
    };

    return (
        <ShoppingCartContext.Provider value={{ list, addToCart, clearCart}}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
