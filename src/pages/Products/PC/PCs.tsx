import "./../../../static/styles/Products.css";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import { PCActionsButton } from "./components/PCActionsButton";
import { useCallback, useEffect, useState } from "react";
import { TPCSimple } from "../../../types/PC/TPCSimple";
import { UUID } from "crypto";
import { TPCsProps } from "../../../types/PC/TPCsProps";
import { TPCFilter } from "../../../types/PC/TPCFilter";
import { PaginationComponent } from "../../../layout/components/pagination/PaginationComponent";
import { SortingButton } from "../../../layout/components/buttons/SortingButton";
import { FilterPC } from "./FilterPC";
import {
    changePageHandler,
    deletePcHandler,
    getPcsHandler,
    sortingHandler,
} from "./components/PCHandlers";

export const PCs: React.FC<TPCsProps> = ({ userRole }) => {
    const [pcs, setPCs] = useState<TPCSimple[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [pagesCount, setPagesCount] = useState<number>(0);
    const [ascendingFlag, setAscendingFlag] = useState<boolean | null>(null);
    const [filter, setFilter] = useState<TPCFilter>({
        processorBrands: [],
        graphicsCardBrands: [],
        ramCapacities: [],
        driveCapacities: [],
        driveTypes: [],
        operatingSystems: [],
        priceFrom: 0,
        priceTo: null,
        pagingAndSortingRequest: {
            pageNumber: pageNumber,
            pageSize: pageSize,
            ascendingFlag: null,
        },
    });
    
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const getPCs = useCallback(async () => {
        await getPcsHandler(filter, setPCs, setPagesCount);
    }, [filter, setPCs, setPagesCount]);

    const deletePc = async (id: UUID) => {
        await deletePcHandler(id, setPCs);
    };

    useEffect(() => {
        getPCs();
    }, [getPCs]);

    const handleChangePage = (pageNumber: number, pageSize: number) => {
        changePageHandler(
            filter,
            setPageNumber,
            setPageSize,
            setFilter,
            pageNumber,
            pageSize,
        );
    };

    const handleChangeSorting = (ascendingFlag: boolean | null) => {
        sortingHandler(filter, setAscendingFlag, setFilter, ascendingFlag);
    };

    return (
        <div className="p-2 mt-2">
            <div className="container d-flex justify-content-center">
                <div className="container-fluid px-0">
                    <PaginationComponent
                        pagesCount={pagesCount}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                        onChangePage={handleChangePage}
                    />
                </div>
                <div className="me-2">
                    <SortingButton
                        ascendingFlag={ascendingFlag}
                        onChangeSorting={handleChangeSorting}
                    />
                </div>
            </div>
            <div className="container d-flex justify-content-between pt-2">
                <FilterPC setFilter={setFilter} />

                <div className="container col-10 p-2">
                    {pcs.map((pc) => (
                        <div key={pc.id} className="mb-2">
                            <div className="card">
                                <a
                                    className="products-header-link"
                                    href={"pc/" + pc.id}
                                >
                                    <h5 className="card-header">
                                        PC - {pc.processorName} -{" "}
                                        {pc.graphicsCardName} - {pc.ramCapacity}{" "}
                                        RAM
                                    </h5>
                                </a>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <a href={"pc/" + pc.id}>
                                            <img
                                                src={imagePlaceholder}
                                                className="img-fluid rounded-start products-product-image"
                                                alt="Product"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <div className="card-body">
                                            <p className="card-text">
                                                <b>Processor: </b>
                                                {pc.processorName}
                                            </p>
                                            <p className="card-text">
                                                <b>GPU: </b>
                                                {pc.graphicsCardName}
                                            </p>
                                            <p className="card-text">
                                                <b>RAM: </b>
                                                {pc.ramCapacity}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="products-price-tag">
                                            <div className="card-body">
                                                <div>$ {pc.price}</div>
                                            </div>
                                            <AddToCartButton />
                                            {userRole !== "Customer" && (
                                                <PCActionsButton
                                                    deletePc={deletePc}
                                                    id={pc.id}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PaginationComponent
                pagesCount={pagesCount}
                pageNumber={pageNumber}
                pageSize={pageSize}
                onChangePage={handleChangePage}
            />
        </div>
    );
};
