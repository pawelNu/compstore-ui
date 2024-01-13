import { UUID } from "crypto";

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
