import { UUID } from "crypto";

export type TPCDetails = {
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

export type TPCNewOrUpdated = {
    processorBrand: UUID | string;
    processorName: string;
    graphicsCardBrand: UUID | string;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: UUID | string;
    price: number;
};

export type TPCSimple = {
    id: UUID;
    processorName: string;
    graphicsCardName: string;
    ramCapacity: number;
    price: number;
};

export type TPCComboData = {
    processorBrands: TIDNameType[];
    graphicsCardBrands: TIDNameType[];
    ramCapacities: string[];
    driveCapacities: string[];
    driveTypes: string[];
    operatingSystems: TIDNameType[];
};

export type TIDNameType = {
    id: UUID;
    name: string;
};

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
    ascendingFlag: boolean;
};

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
