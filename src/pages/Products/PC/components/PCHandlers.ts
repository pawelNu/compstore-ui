import { UUID } from "crypto";
import hostName from "../../../../config/config";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { TPCFilter, TPCSimple } from "../../../../types/PC/TPC";

export const getPcsHandler = async (
    filter: TPCFilter,
    setPCs: Dispatch<SetStateAction<TPCSimple[]>>,
    setPagesCount: Dispatch<SetStateAction<number>>,
) => {
    const url = `${hostName}/pcs/search`;
    try {
        const result = await axios.post(url, filter);
        setPCs(result.data.pcs);
        const pagingMetadata: { pagesCount: number } =
            result.data.pagingAndSortingMetadata;
        setPagesCount(pagingMetadata.pagesCount);
    } catch (error: any) {
        console.log("file: PCs.tsx  getPCs  error:", error);
    }
};

export const deletePcHandler = async (
    id: UUID,
    setPCs: React.Dispatch<React.SetStateAction<TPCSimple[]>>,
) => {
    try {
        await axios.delete(`${hostName}/pcs/${id}`);
        setPCs((prevPcs) => prevPcs.filter((pc) => pc.id !== id));
    } catch (e) {
        console.log("Error deleting pc -> file: PCs.tsx  deletePc  e:", e);
    }
};

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

export const RemoveFilterHandler = (
    filterName: string,
    setFilter: React.Dispatch<React.SetStateAction<TPCFilter>>,
) => {
    setFilter((prevFilter) => {
        const [filterKey] = filterName.split(":").map((part) => part.trim());

        const updatedFilter: TPCFilter = {
            ...prevFilter,
            [filterKey]: [],
        };

        return updatedFilter;
    });
};
