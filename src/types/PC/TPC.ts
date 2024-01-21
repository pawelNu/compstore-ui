import { UUID } from "crypto";

export type TAddNewPC = {
    processorBrand: UUID;
    processorName: string;
    graphicsCardBrand: UUID;
    graphicsCardName: string;
    ramGBCapacity: number;
    driveGBCapacity: number;
    driveType: string;
    operatingSystem: UUID;
    price: number;
};

export type TPCDetails = {
    id: UUID;
    processorBrand: TIDNameType;
    processorName: string;
    graphicsCardBrand: TIDNameType;
    graphicsCardName: string;
    ramCapacity: number;
    driveCapacity: number;
    driveType: string;
    operatingSystem: string;
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
    ascendingFlag: boolean | null;
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

export type TPCsProps = {
    userRole: string;
};
