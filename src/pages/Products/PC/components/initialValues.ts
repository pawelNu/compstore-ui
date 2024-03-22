import { TPCDetails, TPCPageRequest } from "../../../../types/PC/TPC";

export const initialPCDetails: TPCDetails = {
    id: "string-string-string-string-string",
    processorBrand: {
        id: "string-string-string-string-string",
        name: "",
    },
    processorName: "",
    graphicsCardBrand: {
        id: "string-string-string-string-string",
        name: "",
    },
    graphicsCardName: "",
    ramCapacity: "",
    driveCapacity: "",
    driveType: "",
    operatingSystem: {
        id: "string-string-string-string-string",
        name: "",
    },
    price: 0,
};

export const initialValuesFilter: TPCPageRequest = {
    processorBrands: [],
    graphicsCardBrands: [],
    ramCapacities: [],
    driveCapacities: [],
    driveTypes: [],
    operatingSystems: [],
    priceFrom: "",
    priceTo: "",
    pagingAndSortingRequest: {
        pageNumber: 0,
        pageSize: 10,
        ascendingFlag: true,
    },
};
