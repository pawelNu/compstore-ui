import { UUID } from "crypto";

export type TPCComboData = {
    processorBrands: TIDNameType[];
    graphicsCardBrands: TIDNameType[];
    driveTypes: string[];
    operatingSystems: TIDNameType[];
};

type TIDNameType = {
    id: UUID;
    name: string;
};
