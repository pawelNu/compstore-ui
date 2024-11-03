import Card from "react-bootstrap/esm/Card";
import { Loading } from "../spinner/Loading";
import { useFetchData } from "./useFetchData";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { productStyles } from "../../static/styles/Products";
import { endpoints, links } from "../../config/links";
import { ProductDetails, ProductDetails2 } from "./ProductDetails";
import { ButtonWithIcon } from "../buttons/ButtonWithIcon";
import { buttons } from "../buttons/buttonsConfig";
import { ActionsButton } from "../buttons/ActionsButton";
import { useUser } from "../../redux/UserProvider";
import { UUID } from "crypto";
import { addToCartHandler } from "../../pages/Products/PC/components/PCActions";
import { useShoppingCart } from "../../redux/ShoppingCartProvider";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { isUUID, mapToItems, removeItemByIdFromList } from "./utils";

type PagingMetadata = {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
};

type Props = {
    endpoint: string;
    initialFilter: any;
    productType: string;
};

export type MappedProperty = {
    param: string;
    value: string | number | UUID;
};

export type MappedItem = MappedProperty[];

export const SimpleProductCardList = ({ endpoint, initialFilter, productType: responseKey }: Props) => {
    const [items, setItems] = useState<MappedItem[]>([]);
    const { userRole } = useUser();
    const { addToCart } = useShoppingCart();

    console.log("file: SimpleProductCard.tsx:27   SimpleProductCard   responseKey:", responseKey);
    const { data, loading, error, setFilter } = useFetchData(endpoint, initialFilter);
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    console.log("file: SimpleProductCard.tsx:27   data:", data);

    const keyMapping: { [key: string]: string } = {
        // processorBrand: "Processor Brand",
        processorName: "Processor",
        // graphicsCardBrand: "Graphics Card Brand",
        graphicsCardName: "GPU",
        ramCapacity: "RAM",
        // driveCapacity: "Drive Capacity",
        // driveType: "Drive Type",
        // operatingSystem: "Operating System",
        price: "Price",
        // Możesz dodać więcej pól w przyszłości
    };

    const getItemsArray = () => {
        const itemsArray = Array.isArray(data?.[responseKey]) ? data[responseKey] : [];
        const itemList = mapToItems(itemsArray, keyMapping);
        setItems(itemList);
    };

    useEffect(() => {
        getItemsArray();
    }, [data, responseKey]);

    console.log("items: ", items);

    if (loading) return <Loading />;

    if (error) return <div>{error}</div>;

    const deletePc = async (id: UUID | undefined): Promise<{ success: boolean; error?: string }> => {
        try {
            await axios.delete(endpoints.pcs.byId + id);
            setItems(removeItemByIdFromList(items, id));
            return { success: true };
        } catch (e: any) {
            console.error("Error during deleting pc: ", e);
            return { success: false, error: e.response.data.message };
        }
    };

    const handleAddToCart = async (id: UUID | undefined) => {
        if (isUUID(id)) {
            addToCartHandler(id, addToCart);
        } else {
            console.error("Product id not found");
        }
    };

    const findId = (itemDetailsList: MappedItem): UUID | undefined => {
        const id = itemDetailsList.find((item) => item.param === "id");
        if (id?.value && isUUID(id.value)) {
            return id.value;
        } else {
            console.warn("Not found Id for object: " + itemDetailsList);
            return undefined;
        }
    };

    const getName = (itemDetailsList: MappedItem) => {
        const filteredParams = itemDetailsList.filter(
            (item) => item.param === "Processor" || item.param === "GPU" || item.param === "RAM",
        );

        let name = "";
        if (filteredParams.length > 0) {
            filteredParams.forEach((item) => {
                name = name + item.value + " - ";
            });
            return name.substring(0, name.length - 3);
        } else {
            console.warn("Not found Name for object: " + itemDetailsList);
            return "Not found Name";
        }
    };

    const getPrice = (itemDetailsList: MappedItem) => {
        const priceItem = itemDetailsList.find((item) => item.param === "Price");

        if (priceItem) {
            return priceItem.value;
        } else {
            console.warn("Not found Price for object: " + itemDetailsList);
            return "Not found Price";
        }
    };

    return (
        <div>
            <div className="container col-10 p-2">
                {items.map((itemDetailsList, index) => {
                    let itemId = findId(itemDetailsList);
                    return (
                        <div key={index} className="mb-2">
                            <Card>
                                <a style={productStyles.headerLink} href={links.pcDetails + itemId}>
                                    <CardHeader as={"h5"}>{getName(itemDetailsList)}</CardHeader>
                                </a>
                                <div className="row g-0">
                                    <div className="col-3">
                                        <a href={links.pcDetails + itemId}>
                                            <img
                                                src={imagePlaceholder}
                                                className="img-fluid rounded-start"
                                                style={productStyles.productImage}
                                                alt="Product"
                                            />
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <ProductDetails2 itemDetailsList={itemDetailsList} />
                                    </div>
                                    <div className="col-3">
                                        <div style={productStyles.priceTag}>
                                            <div className="card-body">
                                                <div>$ {getPrice(itemDetailsList)}</div>
                                            </div>
                                            <ButtonWithIcon
                                                config={buttons.addToCart}
                                                onClick={() => handleAddToCart(itemId)}
                                            />
                                            {userRole !== "Customer" && (
                                                <ActionsButton
                                                    id={itemId}
                                                    editLink={links.pcEdit}
                                                    deleteItem={deletePc}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    );
                })}
            </div>
            {/* TODO pomyśleć nad paginacją */}
            {/* TODO pomyśleć nad sortowaniem */}
            {/* 
                <PaginationComponent
                    currentPage={data.pagingAndSortingMetadata.pageNumber}
                    totalPages={data.pagingAndSortingMetadata.pagesCount}
                    onPageChange={(pageNumber, pageSize) => setFilter({ ...initialFilter, pageNumber, pageSize })}
                />
            */}
        </div>
    );
};
