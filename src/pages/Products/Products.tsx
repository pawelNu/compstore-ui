import { productsPC } from "../../data/ProductsPCData";
import "./../../static/styles/Product.css";

export const Products = () => {
    return (
        <div className="container p-2 mb-2">
            <div className="row">
                {productsPC.map((data) => (
                    <div key={data.id} className="col-sm-6 mb-2">
                        <div className="card">
                            <h5 className="card-header">{data.name}</h5>
                            <div className="card-body">
                                {data.feature.map((feature, index) => (
                                    <p className="card-text" key={index + 1}>
                                        <b>{feature.featureName}: </b>
                                        {feature.value}
                                    </p>
                                ))}
                                <div className="price-tag">
                                    <p className="card-text">
                                        <b>Price: </b>$ {data.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
