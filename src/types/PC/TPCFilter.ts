import { UUID } from "crypto";
import { TPCPageRequest } from "./TPCPageRequest";

export type TPCFilter = {
    processorBrands: UUID[];
    graphicsCardBrands: UUID[];
    ramCapacities: string[];
    driveCapacities: string[];
    driveTypes: string[];
    operatingSystems: UUID[];
    priceFrom: number;
    priceTo: number | null;
    pagingAndSortingRequest: TPagingAndSortingRequest;
};

type TPagingAndSortingRequest = {
    pageNumber: number;
    pageSize: number;
    ascendingFlag: boolean | null;
};

export type TPCFilterProps = {
    setFilter: (filter: TPCPageRequest) => void;
};
