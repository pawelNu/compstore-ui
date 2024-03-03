import { useEffect, useState } from "react";
import "../../../static/styles/OneProductDetails.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TPCDetails } from "../../../types/PC/TPC";
import { initialPCDetails } from "./components/initialValues";
import { oneProductStyle } from "../../../static/styles/OneProductDetails.js";
import { endpoints } from "../../../config/links.js";
import { ButtonWithIcon } from "../../../components/buttons/ButtonWithIcon";
import { useShoppingCart } from "../../../redux/ShoppingCartProvider";
import { UUID } from "crypto";
import { addToCartHandler } from "./components/PCactions";
import { buttons } from "../../../components/buttons/buttonsConfig";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { ProductDetails } from "../../../components/product/ProductDetails";

export const PCDetails = () => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const [pc, setPc] = useState<TPCDetails>(initialPCDetails);
    const { addToCart } = useShoppingCart();

    const { id } = useParams();

    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(endpoints.pcs.byId + id);
            setPc(result.data);
        } catch (e) {
            console.log(
                "Error getting pc -> file: PCDetails.tsx  getPc  e:",
                e,
            );
        }
    };

    const pcDetailsMap: { [key: string]: string } = {
        Processor: pc.processorName,
        GPU: pc.graphicsCardName,
        RAM: pc.ramCapacity,
        "Storage drive": `${pc.driveType} ${pc.driveCapacity}`,
        "Operating system": pc.operatingSystem.name,
    };

    const handleAddToCart = async (id: UUID) => {
        addToCartHandler(id, addToCart);
    };

    useEffect(() => {
        getPc(id);
    }, [id]);

    return (
        <div className="container p-2 mb-2">
            <div key={pc.id} className="card">
                <h5 className="card-header">
                    PC - {pc.processorName} - {pc.graphicsCardName} -{" "}
                    {pc.ramCapacity} RAM
                </h5>
                <div className="card-body">
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
                                    <div style={oneProductStyle.priceTag}>
                                        $ {pc.price}
                                    </div>
                                    <div className="mt-3">
                                        <ButtonWithIcon
                                            config={buttons.addToCart}
                                            onClick={() =>
                                                handleAddToCart(pc.id)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductDetails
                        header="Product Details"
                        detailsMap={pcDetailsMap}
                    />
                </div>
            </div>
        </div>
    );
};
