import { endpoints } from "../../../config/links";
import { SimpleProductCard } from "../../../components/product/SimpleProductCard";
import { SimpleProductCardDetails } from "../../../components/product/SimpleProductCardDetails";

const initialFilter = {
    processorBrands: [],
    graphicsCardBrands: [],
    ramCapacities: [],
    driveCapacities: [],
    driveTypes: [],
    operatingSystems: [],
    priceFrom: 0,
    priceTo: null,
    pagingAndSortingRequest: {
        pageNumber: 0,
        pageSize: 10,
        ascendingFlag: true,
    },
};

export const PCs2 = () => {
    return (
        <div>
            <SimpleProductCard
                endpoint={endpoints.pcs.getAll}
                initialFilter={initialFilter}
                ItemComponent={SimpleProductCardDetails}
            />
        </div>
    );
};
