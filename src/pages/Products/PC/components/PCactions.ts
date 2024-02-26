import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { TPCFilter, TPCSimple } from "../../../../types/PC/TPC";
import { endpoints } from "../../../../config/links";
import { UUID } from "crypto";
import { TCartItem } from "../../../../redux/ShoppingCartProvider";

export const getPcsHandler = async (
    filter: TPCFilter,
    setPCs: Dispatch<SetStateAction<TPCSimple[]>>,
    setPagesCount: Dispatch<SetStateAction<number>>,
    setPageNumber: Dispatch<SetStateAction<number>>,
    setPageSize: Dispatch<SetStateAction<number>>,
) => {
    try {
        const result = await axios.post(endpoints.pcs.getAll, filter);
        setPCs(result.data.pcs);
        const pagingMetadata: {
            pagesCount: number;
            pageNumber: number;
            pageSize: number;
        } = result.data.pagingAndSortingMetadata;
        setPagesCount(pagingMetadata.pagesCount);
        setPageNumber(pagingMetadata.pageNumber);
        setPageSize(pagingMetadata.pageSize);
    } catch (error: any) {
        console.log("file: PCactions.ts   error:", error);
    }
};

export const addToCartHandler = async (
    id: UUID,
    addToCart: (product: TCartItem) => void,
) => {
    try {
        addToCart({ id: id, quantity: 0 });
    } catch (e) {
        console.log("file: PCactions.ts   e:", e);
    }
};

// export const addToCartHandler = async (
//     id: UUID,
//     addToCart: (product: TCartItem) => void,
// ) => {
//     try {
//         const result = await axios.get(endpoints.pcs.byId + id);
//         const product = transformProduct(result.data);
//         addToCart(product);
//     } catch (e) {
//         console.log("file: PCactions.ts:39   e:", e);
//     }
// };

// function transformProduct(pc: TPCDetails): TCartItem {
//     let details: string[] = [
//         "PC",
//         `Processor: ${pc.processorName}`,
//         `Graphic Card: ${pc.graphicsCardName}`,
//         `RAM: ${pc.ramCapacity}`,
//         `Drive: ${pc.driveCapacity} ${pc.driveType}`,
//         `System: ${pc.operatingSystem.name}`,
//     ];

//     const transformedProduct: TCartItem = {
//         id: pc.id,
//         details: details,
//         price: pc.price,
//         quantity: 0,
//     };

//     return transformedProduct;
// }

export const changePageHandler = (
    filter: TPCFilter,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>,
    setPageSize: React.Dispatch<React.SetStateAction<number>>,
    setFilter: React.Dispatch<React.SetStateAction<TPCFilter>>,
    pageNumber: number,
    pageSize: number,
) => {
    setPageNumber(pageNumber);
    setPageSize(pageSize);

    const updatedFilter = {
        ...filter,
        pagingAndSortingRequest: {
            ...filter.pagingAndSortingRequest,
            pageNumber,
            pageSize,
        },
    };

    setFilter(updatedFilter);
};

export const sortingHandler = (
    filter: TPCFilter,
    setAscendingFlag: React.Dispatch<React.SetStateAction<boolean | null>>,
    setFilter: React.Dispatch<React.SetStateAction<TPCFilter>>,
    ascendingFlag: boolean | null,
) => {
    setAscendingFlag(ascendingFlag);

    const updatedFilter = {
        ...filter,
        pagingAndSortingRequest: {
            ...filter.pagingAndSortingRequest,
            ascendingFlag,
        },
    };

    setFilter(updatedFilter);
};
