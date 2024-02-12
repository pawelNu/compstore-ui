import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { TIDNameType } from "../types/PC/TPC";
import { UUID } from "crypto";

type TPCItem = {
    id: UUID;
    productType: string;
    processorBrand: TIDNameType;
    processorName: string;
    graphicsCardBrand: TIDNameType;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: TIDNameType;
    price: number;
    quantity: number;
};

type TLaptopItem = {
    id: UUID;
    productType: string;
    processorBrand: TIDNameType;
    processorName: string;
    graphicsCardBrand: TIDNameType;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: TIDNameType;
    price: number;
    quantity: number;
};

type TShoppingCartList = (TPCItem | TLaptopItem)[];

type ShoppingCartContextType = {
    shoppingCartList: TShoppingCartList;
    shoppingListCount: number;
    addToCart: (product: TPCItem) => void;
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

    const addToCart = (product: TPCItem | TLaptopItem) => {
        const productIndex = checkProductIndex(product.id);

        if (productIndex === -1) {
            setShoppingCartList((prevList) => [
                ...prevList,
                { ...product, quantity: 1 },
            ]);
            // TODO add message info when adding product to shopping cart
            console.log("Added product to shopping cart: ", product);
        } else {
            const updatedList = [...shoppingCartList];
            updatedList[productIndex].quantity += 1;
            setShoppingCartList(updatedList);
            // TODO add message info when incrementing product in shopping cart
            console.log(
                "Added product QUANTITY + 1 to shopping cart: ",
                product,
            );
        }
    };

    const deleteFromCart = (id: UUID) => {
        const productIndex = checkProductIndex(id);

        if (productIndex !== -1) {
            const updatedList = [...shoppingCartList];
            updatedList.splice(productIndex, 1);
            setShoppingCartList(updatedList);
            // TODO add message info when adding product to shopping cart
            console.log(
                "Deleted product from shopping cart: ",
                shoppingCartList[productIndex],
            );
        } else {
            // TODO add message info when incrementing product in shopping cart
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
