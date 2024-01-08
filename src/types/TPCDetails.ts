import { UUID } from "crypto";

export type TPCDetails = {
    id: UUID;
    processorBrand: string;
    processorName: string;
    graphicsCardBrand: string;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: string;
    price: number;
};
