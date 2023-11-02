import { productsPC } from "../../data/ProductsPCData";
import { AddToCartButton } from "../../layout/components/buttons/AddToCartButton";
import "./../../static/styles/OneProductDetails.css";

export const OneProductDetails = () => {
    const extractIdFromURL = () => {
        const path = window.location.pathname;
        const parts = path.split("/");
        const id = parts[parts.length - 1];

        return id;
    };

    const productId = extractIdFromURL();

    const selectedPC = productsPC.filter((data) => productId.includes(data.id));

    return (
        <div className="container p-2 mb-2">
            {selectedPC.map((data) => (
                <div key={data.id} className="card">
                    <h5 className="card-header">{data.name}</h5>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <img
                                    src={data.productImage}
                                    className="img-fluid rounded-start one-product-details-product-image"
                                    alt="Product"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="one-product-details-price-tag">
                                            $ {data.price}
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
                                    {data.feature.map((feature, index) => (
                                        <p
                                            className="card-text"
                                            key={index + 1}
                                        >
                                            <b>{feature.featureName}: </b>
                                            {feature.value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
