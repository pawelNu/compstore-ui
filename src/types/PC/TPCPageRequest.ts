import { UUID } from "crypto";

export type TPCPageRequest = {
    processorBrands: UUID[];
    graphicsCardBrands: UUID[];
    ramCapacities: string[];
    driveCapacities: string[];
    driveTypes: string[];
    operatingSystems: UUID[];
    priceFrom: number | string;
    priceTo: number | string;
    pagingAndSortingRequest: TPagingAndSortingRequest;
};

type TPagingAndSortingRequest = {
    pageNumber: number;
    pageSize: number;
    ascendingFlag: boolean | null;
};
