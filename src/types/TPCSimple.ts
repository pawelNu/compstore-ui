import { UUID } from "crypto";

export type TPCSimple = {
    id: UUID;
    processorName: string;
    graphicsCardName: string;
    ramGBCapacity: number;
    price: number;
};
