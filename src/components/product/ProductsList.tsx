import React from "react";
import { SimpleProductCardList } from "./SimpleProductCardList";
import { endpoints } from "../../config/links";

export const ProductsList = () => {
    const initialFilter = {};

    return <SimpleProductCardList endpoint={endpoints.pcs.getAll} initialFilter={initialFilter} productType={"pcs"} />;
};
