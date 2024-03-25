import { useCallback, useEffect, useState } from "react";
import { UUID } from "crypto";
import { TPCSimple, TPCFilter } from "../../../types/PC/TPC";
import { SortingButton } from "../../../components/buttons/SortingButton";
import { PaginationComponent } from "../../../components/pagination/PaginationComponent";
import { PCFilter } from "./PCFilter";
import { productStyles } from "../../../static/styles/Products";
import { endpoints, links } from "../../../config/links";
import { ActionsButton } from "../../../components/buttons/ActionsButton";
import axios from "axios";
import { ButtonWithIcon } from "../../../components/buttons/ButtonWithIcon";
import { buttons } from "../../../components/buttons/buttonsConfig";
import { useShoppingCart } from "../../../redux/ShoppingCartProvider";
import { addToCartHandler } from "./components/PCActions";
import { useUser } from "../../../redux/UserProvider";
import { ProductDetails } from "../../../components/product/ProductDetails";
import { Card, CardHeader } from "react-bootstrap";
import { pagePaginationStyles } from "../../../static/styles/PagePagination";
import Swal from "sweetalert2";

export const PCs = () => {
    const { userRole } = useUser();
    const [pcs, setPCs] = useState<TPCSimple[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [pagesCount, setPagesCount] = useState<number>(0);
    const [ascendingFlag, setAscendingFlag] = useState<boolean>(true);
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
            ascendingFlag: true,
        },
    });
    const { addToCart } = useShoppingCart();

    const handleAddToCart = async (id: UUID) => {
        addToCartHandler(id, addToCart);
    };

    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    // TODO dodać loading div przed załadowaniem danych
    const getPCs = useCallback(async () => {
        try {
            const result = await axios.post(endpoints.pcs.getAll, filter);
            setPCs(result.data.pcs);
            const pagingMetadata: {
                pagesCount: number;
                pageNumber: number;
                pageSize: number;
            } = result.data.pagingAndSortingMetadata;
            setPagesCount(pagingMetadata.pagesCount);
            setPageNumber(pagingMetadata.pageNumber);
            setPageSize(pagingMetadata.pageSize);
        } catch (e: any) {
            console.log("file: PCs.tsx   getPCs   e:", e);
            const error = e.response.data.violations
                .map((violation: { field: string; message: string }) => `${violation.field}: ${violation.message}`)
                .join(", ");
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error during searching PC!\n" + error,
            });
        }
    }, [filter, setPCs, setPagesCount, setPageNumber, setPageSize]);

    const deletePc = async (id: UUID): Promise<{ success: boolean; error?: string }> => {
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
        setPageNumber(pageNumber);
        setPageSize(pageSize);

        const updatedFilter = {
            ...filter,
            pagingAndSortingRequest: {
                ...filter.pagingAndSortingRequest,
                pageNumber,
                pageSize,
            },
        };

        setFilter(updatedFilter);
    };

    const handleChangeSorting = (ascendingFlag: boolean) => {
        setAscendingFlag(ascendingFlag);

        const updatedFilter = {
            ...filter,
            pagingAndSortingRequest: {
                ...filter.pagingAndSortingRequest,
                ascendingFlag,
            },
        };

        setFilter(updatedFilter);
    };

    return (
        <div className="p-2 mt-2">
            <div className="container d-flex justify-content-center">
                <div className="container" style={pagePaginationStyles.topPaginationDiv}>
                    <PaginationComponent
                        pagesCount={pagesCount}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                        onChangePage={handleChangePage}
                    />
                </div>
                <div className="me-2">
                    <SortingButton ascendingFlag={ascendingFlag} onChangeSorting={handleChangeSorting} />
                </div>
            </div>
            <div className="container d-flex justify-content-between pt-2">
                <PCFilter setFilter={setFilter} />
                <div className="container col-10 p-2">
                    {pcs.map((pc) => (
                        <div key={pc.id} className="mb-2">
                            <Card>
                                <a style={productStyles.headerLink} href={links.pcDetails + pc.id}>
                                    <CardHeader as={"h5"}>
                                        {[pc.processorName, pc.graphicsCardName, pc.ramCapacity].join(" - ")}
                                    </CardHeader>
                                </a>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <a href={links.pcDetails + pc.id}>
                                            <img
                                                src={imagePlaceholder}
                                                className="img-fluid rounded-start"
                                                style={productStyles.productImage}
                                                alt="Product"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <ProductDetails
                                            detailsMap={{
                                                Processor: pc.processorName,
                                                GPU: pc.graphicsCardName,
                                                RAM: pc.ramCapacity,
                                            }}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <div style={productStyles.priceTag}>
                                            <div className="card-body">
                                                <div>$ {pc.price}</div>
                                            </div>
                                            <ButtonWithIcon
                                                config={buttons.addToCart}
                                                onClick={() => handleAddToCart(pc.id)}
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
                            </Card>
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
