import "./../../../static/styles/Products.css";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import { FilterPC } from "./FilterPC";
import { PCActionsButton } from "./components/PCActionsButton";
import { useCallback, useEffect, useState } from "react";
import { TPCSimple } from "../../../types/PC/TPCSimple";
import hostName from "../../../config/config";
import axios from "axios";
import { UUID } from "crypto";
import { TPCsProps } from "../../../types/PC/TPCsProps";
import { TFilterPC } from "../../../types/PC/TFilterPC";
import { PaginationComponent } from "../../../layout/components/pagination/PaginationComponent";
import { SortingButton } from "../../../layout/components/buttons/SortingButton";

// TODO add sorting
// TODO add filter values from <FilterPC />

export const PCs: React.FC<TPCsProps> = ({ userRole }) => {
    const [pcs, setPCs] = useState<TPCSimple[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [pagesCount, setPagesCount] = useState<number>(0);
    const [ascendingFlag, setAscendingFlag] = useState<boolean | null>(null);
    const [filter, setFilter] = useState<TFilterPC>({
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
        const url = `${hostName}/pcs/search`;
        // TODO connect post request from filter with PC
        try {
            const result = await axios.post(url, filter);
            console.log("getPCs  filter:", filter.pagingAndSortingRequest);
            setPCs(result.data.pcs);
            const pagingMetadata = result.data.pagingAndSortingMetadata;
            console.log(
                "file: PCs.tsx:41  getPCs  pagingMetadata:",
                pagingMetadata,
            );
            setPagesCount(pagingMetadata.pagesCount);
        } catch (error: any) {
            console.log("file: PCs.tsx  getPCs  error:", error);
        }
    }, [filter]);

    const deletePc = async (id: UUID) => {
        try {
            await axios.delete(`${hostName}/pcs/${id}`);
            setPCs((prevPcs) => prevPcs.filter((pc) => pc.id !== id));
        } catch (e) {
            console.log("Error deleting pc -> file: PCs.tsx  deletePc  e:", e);
        }
    };

    useEffect(() => {
        getPCs();
    }, [getPCs]);

    const handleChangePage = useCallback(
        (pageNumber: number, pageSize: number) => {
            setPageNumber(pageNumber);
            setPageSize(pageSize);

            const updatedFilter = {
                ...filter,
                pagingAndSortingRequest: {
                    ...filter.pagingAndSortingRequest,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                },
            };

            setFilter(updatedFilter);
        },
        [filter],
    );

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
                    <SortingButton />
                </div>
            </div>
            <div className="container d-flex justify-content-between pt-2">
                <FilterPC />
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
