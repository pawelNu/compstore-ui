import { UUID } from "crypto";

export type TPCNew = {
    processorBrand: UUID;
    processorName: string;
    graphicsCardBrand: UUID;
    graphicsCardName: string;
    ramCapacity: string;
    driveCapacity: string;
    driveType: string;
    operatingSystem: UUID;
    price: number;
};
