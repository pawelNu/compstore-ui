import { UUID } from "crypto";

export type TPCPageRequest = {
    processorBrands: UUID[];
    graphicsCardBrands: UUID[];
    ramCapacities: string[];
    driveCapacities: string[];
    driveTypes: string[];
    operatingSystems: UUID[];
    priceFrom: number;
    priceTo: number | undefined;
    pagingAndSortingRequest: TPagingAndSortingRequest;
};

type TPagingAndSortingRequest = {
    pageNumber: number;
    pageSize: number;
    ascendingFlag: boolean | null;
};
