import { productsPC } from "../../data/ProductsPCData";
import "./../../static/styles/Product.css";
import { AddToCartButton } from "../../layout/components/buttons/AddToCartButton";

export const Products = () => {
    return (
        <div className="container p-2 mb-2">
            <div className="row">
                {productsPC.map((data) => (
                    <div key={data.id} className="col-sm-6 mb-2">
                        <div className="card">
                            <a href={"pc/" + data.id}>
                                <h5 className="card-header">{data.name}</h5>
                            </a>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <a href={"pc/" + data.id}>
                                        <img
                                            src={data.productImage}
                                            className="img-fluid rounded-start"
                                            style={{
                                                width: "480px",
                                                height: "240px",
                                            }}
                                            alt="Product"
                                        />
                                    </a>
                                </div>
                                <div className="col-md-5">
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
                                <div className="col-md-3">
                                    <div className="price-tag">
                                        <div className="card-body">
                                            <b>Price: </b>$ {data.price}
                                        </div>
                                        <AddToCartButton />
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
