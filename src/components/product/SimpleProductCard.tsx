import Card from "react-bootstrap/esm/Card";
import { Loading } from "../spinner/Loading";
import { useFetchData } from "./useFetchData";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { productStyles } from "../../static/styles/Products";
import { links } from "../../config/links";
import { ProductDetails, ProductDetails2 } from "./ProductDetails";
import { ButtonWithIcon } from "../buttons/ButtonWithIcon";
import { buttons } from "../buttons/buttonsConfig";
import { ActionsButton } from "../buttons/ActionsButton";
import { useUser } from "../../redux/UserProvider";
import { UUID } from "crypto";

type PagingMetadata = {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
};

type Props = {
    endpoint: string;
    initialFilter: any;
    responseKey: string;
    ItemComponent: React.ComponentType<any>;
};

export type MappedItem = {
    param: string;
    value: string | number;
};

export const SimpleProductCard = ({ endpoint, initialFilter, responseKey, ItemComponent }: Props) => {
    const { userRole } = useUser();
    console.log("file: SimpleProductCard.tsx:27   SimpleProductCard   responseKey:", responseKey);
    const { data, loading, error, setFilter } = useFetchData(endpoint, initialFilter);
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    console.log("file: SimpleProductCard.tsx:27   data:", data);

    const items = Array.isArray(data?.[responseKey]) ? data[responseKey] : [];

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

    // const mapToItems = (itemsArray: any[]): MappedItem[][] => {
    //     return itemsArray.map((item) => {
    //         return Object.keys(item).map((key) => ({
    //             param: key,
    //             value: (item as any)[key],
    //         }));
    //     });
    // };

    const mapToItems = (itemsArray: any[]): MappedItem[][] => {
        return itemsArray.map((item) => {
            return Object.keys(item).map((key) => {
                const newKey = keyMapping[key] || key;
                return {
                    param: newKey,
                    value: (item as any)[key],
                };
            });
        });
    };

    const itemList = mapToItems(items);
    console.log("file: SimpleProductCard.tsx:36   itemsMapped:", itemList);

    if (loading) return <Loading />;

    if (error) return <div>{error}</div>;

    function deletePc(id: UUID): Promise<{ success: boolean; error?: string | undefined }> {
        throw new Error("Function not implemented.");
    }

    function handleAddToCart(id: any): void {
        throw new Error("Function not implemented.");
    }

    const findId = (itemDetailsList: MappedItem[]) => {
        const id = itemDetailsList.find((item) => item.param === "id");

        if (id) {
            return id.value;
        } else {
            console.warn("Not found Id for object: " + itemDetailsList);
            return "Not found Id";
        }
    };

    const getName = (itemDetailsList: MappedItem[]) => {
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

    const getPrice = (itemDetailsList: MappedItem[]) => {
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
                {itemList.map((itemDetailsList, index) => {
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
                                                // TODO dodać obsługę onClick={() => handleAddToCart(item.id)}
                                                // onClick={() => handleAddToCart(item.id)}
                                            />
                                            {/* TODO naprawić zmiany z userRole */}
                                            {/* {userRole !== "Customer" && (
                                            <ActionsButton id={item.id} editLink={links.pcEdit} deleteItem={deletePc} />
                                        )} */}
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
