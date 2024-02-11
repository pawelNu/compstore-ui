import { useCallback, useEffect, useState } from "react";
import { UUID } from "crypto";
import {
    changePageHandler,
    getPcsHandler,
    sortingHandler,
} from "./components/actions";
import { TPCsProps, TPCSimple, TPCFilter } from "../../../types/PC/TPC";
import { SortingButton } from "../../../components/buttons/SortingButton";
import { PaginationComponent } from "../../../components/pagination/PaginationComponent";
import { PCFilter } from "./PCFilter";
import { productStyles } from "../../../static/styles/Products";
import { endpoints, links } from "../../../config/links";
import { ActionsButton } from "../../../components/buttons/ActionsButton";
import axios from "axios";
import { ButtonWithIcon } from "../../../components/buttons/ButtonWithIcon";
import { buttons } from "../../../config/buttonsConfig";
import { useShoppingCart } from "../../../redux/ShoppingCartProvider";

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

    const { addToCart } = useShoppingCart();

    const handleAddToCart = async (id: UUID) => {
        try {
            const result = await axios.get(endpoints.pcs.byId + id);
            console.log(
                "file: PCs.tsx   handleAddToCart   result:",
                result.data,
            );
            addToCart(result.data);
        } catch (e) {
            console.log("file: PCs.tsx   handleAddToCart   e:", e);
        }
    };

    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const getPCs = useCallback(async () => {
        await getPcsHandler(
            filter,
            setPCs,
            setPagesCount,
            setPageNumber,
            setPageSize,
        );
    }, [filter, setPCs, setPagesCount, setPageNumber, setPageSize]);

    const deletePc = async (
        id: UUID,
    ): Promise<{ success: boolean; error?: string }> => {
        try {
            await axios.delete(endpoints.pcs.byId + id);
            setPCs((prevPcs) => prevPcs.filter((pc) => pc.id !== id));
            return { success: true };
        } catch (e: any) {
            console.log("file: PCs.tsx   e:", e);
            return { success: false, error: e.response.data.message };
        }
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
                <PCFilter setFilter={setFilter} />
                <div className="container col-10 p-2">
                    {pcs.map((pc) => (
                        <div key={pc.id} className="mb-2">
                            <div className="card">
                                <a
                                    style={productStyles.headerLink}
                                    href={links.pcDetails + pc.id}
                                >
                                    <h5 className="card-header">
                                        PC - {pc.processorName} -{" "}
                                        {pc.graphicsCardName} - {pc.ramCapacity}{" "}
                                        RAM
                                    </h5>
                                </a>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <a href={links.pcDetails + pc.id}>
                                            <img
                                                src={imagePlaceholder}
                                                className="img-fluid rounded-start"
                                                style={
                                                    productStyles.productImage
                                                }
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
                                        <div style={productStyles.priceTag}>
                                            <div className="card-body">
                                                <div>$ {pc.price}</div>
                                            </div>
                                            <ButtonWithIcon
                                                config={buttons.addToCart}
                                                onClick={() =>
                                                    handleAddToCart(pc.id)
                                                }
                                            />
                                            {userRole !== "Customer" && (
                                                <ActionsButton
                                                    id={pc.id}
                                                    editLink={links.pcEdit}
                                                    deleteItem={deletePc}
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
