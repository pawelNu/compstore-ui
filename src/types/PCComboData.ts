import { UUID } from "crypto";

export type PCComboData = {
    processorBrands: IDNameType[];
    graphicsCardBrands: IDNameType[];
    driveTypes: string[];
    operatingSystems: IDNameType[];
};

type IDNameType = {
    id: UUID;
    name: string;
};
