import "../../static/styles/OneProductDetails";
import { oneProductStyle } from "../../static/styles/OneProductDetails";
import { ButtonWithIcon } from "../buttons/ButtonWithIcon";
import { useShoppingCart } from "../../redux/ShoppingCartProvider";
import { UUID } from "crypto";
import { addToCartHandler } from "../../pages/Products/PC/components/PCActions";
import { buttons } from "../buttons/buttonsConfig";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { ProductDetails } from "./ProductDetails";
import { TPCDetails } from "../../types/PC/TPC";
import { useEffect, useState } from "react";
import { Loading } from "../spinner/Loading";

export type TDetailsMap = { [key: string]: string };

type Props = {
    data: TPCDetails;
    imagePlaceholder: string;
    productDetailsMap: TDetailsMap;
};

export const ProductDetailsComponent: React.FC<Props> = ({ data, imagePlaceholder, productDetailsMap }) => {
    const [loading, setLoading] = useState(true);
    const { addToCart } = useShoppingCart();

    const handleAddToCart = async (id: UUID) => {
        addToCartHandler(id, addToCart);
    };

    useEffect(() => {
        const isDataValid = (data: TPCDetails) => {
            return Object.values(data).every((value) => value !== undefined && value !== "");
        };

        if (isDataValid(data)) {
            setLoading(false);
        }
    }, [data]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="container p-2 mb-2">
                    <Card key={data.id}>
                        <CardHeader as={"h5"}>{Object.values(productDetailsMap).join(" - ")}</CardHeader>
                        <CardBody className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <img
                                        src={imagePlaceholder}
                                        className="img-fluid rounded-start"
                                        style={oneProductStyle.productImage}
                                        alt="Product"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <div style={oneProductStyle.priceTag}>$ {data.price}</div>
                                            <div className="mt-3">
                                                <ButtonWithIcon
                                                    config={buttons.addToCart}
                                                    onClick={() => handleAddToCart(data.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProductDetails header="Product Details" detailsMap={productDetailsMap} />
                        </CardBody>
                    </Card>
                </div>
            )}
        </>
    );
};
