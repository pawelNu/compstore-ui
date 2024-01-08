import { useEffect, useState } from "react";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import "./../../../static/styles/OneProductDetails.css";
import { TPCDetails } from "../../../types/TPCDetails";
import axios from "axios";
import hostName from "../../../config/config";
import { useParams } from "react-router-dom";

export const PCDetails = () => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const [pc, setPc] = useState<TPCDetails>({
        id: "string-string-string-string-string",
        processorBrand: "",
        processorName: "",
        graphicsCardBrand: "",
        graphicsCardName: "",
        ramCapacity: "",
        driveCapacity: "",
        driveType: "",
        operatingSystem: "",
        price: 0,
    });

    const { id } = useParams();

    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(`${hostName}/pcs/${id}`);
            setPc(result.data);
        } catch (e) {
            console.log(
                "Error getting pc -> file: PCDetails.tsx  getPc  e:",
                e,
            );
        }
    };

    useEffect(() => {
        getPc(id);
    }, [id]);

    return (
        <div className="container p-2 mb-2">
            <div key={pc.id} className="card">
                <h5 className="card-header">
                    PC - {pc.processorName} - {pc.graphicsCardName} -{" "}
                    {pc.ramCapacity} GB RAM
                </h5>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <img
                                src={imagePlaceholder}
                                className="img-fluid rounded-start one-product-details-product-image"
                                alt="Product"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="one-product-details-price-tag">
                                        $ {pc.price}
                                    </div>
                                    <div className="one-product-details-button mt-3">
                                        <AddToCartButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <h5 className="card-header">Product details</h5>
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
                                    {pc.ramCapacity} GB
                                </p>
                                <p className="card-text">
                                    <b>Storage drive: </b>
                                    {pc.driveType} {pc.driveCapacity} GB
                                </p>
                                <p className="card-text">
                                    <b>Operating system: </b>
                                    {pc.operatingSystem}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
