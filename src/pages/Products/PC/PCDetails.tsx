import { pcDetails } from "../../../data/PCDetailsData";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import "./../../../static/styles/OneProductDetails.css";

export const PCDetails = () => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    return (
        <div className="container p-2 mb-2">
            <div key={pcDetails.id} className="card">
                <h5 className="card-header">
                    PC - {pcDetails.processorName} -{" "}
                    {pcDetails.graphicsCardName} - {pcDetails.ramGBCapacity} GB
                    RAM
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
                                        $ {pcDetails.price}
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
                                    {pcDetails.processorName}
                                </p>
                                <p className="card-text">
                                    <b>GPU: </b>
                                    {pcDetails.graphicsCardName}
                                </p>
                                <p className="card-text">
                                    <b>RAM: </b>
                                    {pcDetails.ramGBCapacity} GB
                                </p>
                                <p className="card-text">
                                    <b>Storage drive: </b>
                                    {pcDetails.driveType}{" "}
                                    {pcDetails.driveGBCapacity} GB
                                </p>
                                <p className="card-text">
                                    <b>Operating system: </b>
                                    {pcDetails.operatingSystem}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
