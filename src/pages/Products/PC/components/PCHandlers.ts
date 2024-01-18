import { UUID } from "crypto";
import { TPCFilter } from "../../../../types/PC/TPCFilter";
import hostName from "../../../../config/config";
import axios from "axios";
import { TPCSimple } from "../../../../types/PC/TPCSimple";
import { Dispatch, SetStateAction } from "react";

export const getPcsHandler = async (
    filter: TPCFilter,
    setPCs: Dispatch<SetStateAction<TPCSimple[]>>,
    setPagesCount: Dispatch<SetStateAction<number>>,
    // setActiveFilters: Dispatch<SetStateAction<string[]>>,
) => {
    const url = `${hostName}/pcs/search`;
    try {
        const result = await axios.post(url, filter);
        console.log("getPCs  filter:", filter);
        setPCs(result.data.pcs);
        const pagingMetadata: { pagesCount: number } =
            result.data.pagingAndSortingMetadata;
        console.log(
            "file: PCs.tsx:41  getPCs  pagingMetadata:",
            pagingMetadata,
        );
        setPagesCount(pagingMetadata.pagesCount);

        // const newActiveFilters = generateActiveFilters(filter);
        // setActiveFilters(newActiveFilters);
    } catch (error: any) {
        console.log("file: PCs.tsx  getPCs  error:", error);
    }
};

// const generateActiveFilters = (filter: TPCFilter): string[] => {
//     return Object.entries(filter)
//         .filter(([key, value]) => {
//             if (Array.isArray(value)) {
//                 return value.length > 0;
//             }
//             return false;
//         })
//         .map(([key, value]) => {
//             if (Array.isArray(value)) {
//                 return `${key}: ${value.join(", ")}`;
//             } else {
//                 return `${key}: ${value}`;
//             }
//         });
// };

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
