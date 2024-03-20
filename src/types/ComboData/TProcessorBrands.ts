import { UUID } from "crypto";

export type TProcessorBrands = {
    id: UUID;
    name: string;
    processorBrandDeviceType: string;
};

export type TProcessorBrandNew = {
    name: string;
    processorBrandDeviceType: string;
};

export type TPBComboData = {
    processorBrandDeviceTypes: string[];
};

export type TPBUpdated = {
    name: string;
    processorBrandDeviceType: string;
};
