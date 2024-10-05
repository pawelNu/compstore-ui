import React from "react";
import { SimpleProductCard } from "./SimpleProductCard";
import { endpoints } from "../../config/links";
import { SimpleProductCardDetails } from "./SimpleProductCardDetails";

export const FetchDataTestComponent: React.FC = () => {
    const initialFilter = {};

    return (
        <SimpleProductCard
            endpoint={endpoints.pcs.getAll}
            initialFilter={initialFilter}
            ItemComponent={SimpleProductCardDetails}
            responseKey={"pcs"}
        />
    );
};
