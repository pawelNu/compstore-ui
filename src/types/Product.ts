import { UUID } from "crypto";

export type Product = {
    id: UUID;
    name: string;
    feature: Feature[];
    price: number;
    productImage: string;
};

type Feature = {
    featureName: string;
    value: string;
};
