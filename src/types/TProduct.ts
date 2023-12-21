import { UUID } from "crypto";

export type TProduct = {
    id: UUID;
    name: string;
    feature: TFeature[];
    price: number;
    productImage: string;
    quantity: number;
};

type TFeature = {
    featureName: string;
    value: string;
};
