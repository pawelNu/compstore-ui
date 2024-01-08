import { productPCs } from "../../../data/PCsData";
import "./../../../static/styles/Products.css";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import { PCFilter } from "./PCFilter";
import { PCActionsButton } from "./components/PCActionsButton";
import { useState } from "react";
import { TPCSimple } from "../../../types/TPCSimple";
import hostName from "../../../config/config";
import axios from "axios";
import { UUID } from "crypto";
import { TPCsProps } from "../../../types/TPCsProps";

export const PCs: React.FC<TPCsProps> = ({ userRole }) => {
    const [pcs, setPcs] = useState<TPCSimple[]>([]);

    const deletePc = async (id: UUID) => {
        try {
            await axios.delete(`${hostName}/pcs/${id}`);
            setPcs((prevPcs) => prevPcs.filter((pc) => pc.id !== id));
        } catch (e) {
            console.log("Error deleting pc -> file: PCs.tsx  deletePc  e:", e);
        }
    };

    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    return (
        <div className="container d-flex justify-content-between p-2 mb-2">
            <PCFilter />
            <div className="container col-10 p-2 mb-2">
                {productPCs.pcs.map((pc) => (
                    <div key={pc.id} className="mb-2">
                        <div className="card">
                            <a
                                className="products-header-link"
                                href={"pc/" + pc.id}
                            >
                                <h5 className="card-header">
                                    PC - {pc.processorName} -{" "}
                                    {pc.graphicsCardName} - {pc.ramGBCapacity}{" "}
                                    GB RAM
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
                                            {pc.ramGBCapacity} GB
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
    );
};
