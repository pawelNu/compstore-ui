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
