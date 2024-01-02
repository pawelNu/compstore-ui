import { UUID } from "crypto";

export type TPCSimple = {
    id: UUID;
    processorName: string;
    graphicsCardName: string;
    ramCapacity: number;
    price: number;
};
