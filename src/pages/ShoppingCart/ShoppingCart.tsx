import { useState } from "react";
import { productsPC } from "../../data/ProductsPCData";
import "./../../static/styles/ShoppingCart.css";
import { deliveryMethods } from "../../data/DeliveryMethodData";
import { DeliveryAddressForm } from "../../forms/ShoppingCart/DeliveryAddressForm";

export const ShoppingCart = () => {
    const selectedIds = [
        "a3d898f3-4eb1-4568-8a40-df7c5fe6089e",
        "be6d4db2-beec-43f7-88b1-49212613e44e",
    ];
    const initialSelectedPC = productsPC.filter((data) =>
        selectedIds.includes(data.id)
    );

    const [selectedPC, setSelectedPC] = useState(initialSelectedPC);

    const handleIncrement = (index: number) => {
        const updatedPC = [...selectedPC];
        updatedPC[index].quantity += 1;
        setSelectedPC(updatedPC);
    };

    const handleDecrement = (index: number) => {
        const updatedPC = [...selectedPC];
        updatedPC[index].quantity = Math.max(0, updatedPC[index].quantity - 1);
        setSelectedPC(updatedPC);
    };

    const totalPrice = selectedPC.reduce(
        (total, product) => total + product.quantity * product.price,
        0
    );

    return (
        <div className="container p-2 mb-2">
            <div className="card">
                <h5 className="card-header">Shopping Cart</h5>
                <div className="card-body">
                    {selectedPC.map((data, index) => (
                        <div key={data.id} className="card mb-2">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div>{data.name}</div>
                                            <div className="d-flex">
                                                <button
                                                    className="btn btn-primary btn-text"
                                                    onClick={() =>
                                                        handleDecrement(index)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className="form-control input-field"
                                                    type="number"
                                                    value={data.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className="btn btn-primary btn-text"
                                                    onClick={() =>
                                                        handleIncrement(index)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="component-information">
                                            {data.feature
                                                .map(
                                                    (feature) =>
                                                        `${feature.featureName} ${feature.value}`
                                                )
                                                .join(", ")}
                                        </div>
                                    </li>
                                    <div>
                                        <div className="quantity-and-price">
                                            {data.quantity} x $ {data.price}
                                        </div>
                                        <div className="price-tag">
                                            $ {data.price * data.quantity}
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="card mb-2">
                        <div className="card-body price-tag">
                            <div>Total: $ {totalPrice}</div>
                        </div>
                    </div>
                    <div className="card mb-2">
                        <h5 className="card-header">Delivery method</h5>
                        <div className="card-body">
                            {deliveryMethods.map((data, index) => (
                                <div key={index} className="mb-2">
                                    <div className="form-check d-flex align-items-center">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="deliveryMethod"
                                            id={`deliveryMethod${index}`}
                                        />
                                        <label
                                            htmlFor={`deliveryMethod${index}`}
                                            className="form-check-label ms-2 w-100"
                                        >
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {data.name}
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        {data.info}
                                                    </h6>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        {data.price}
                                                    </h6>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card mb-2">
                        <h5 className="card-header">Delivery address</h5>
                        <div className="card-body">
                            <DeliveryAddressForm />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <a
                        className="btn btn-outline-danger"
                        href="/pcs"
                        role="button"
                    >
                        Back to shopping
                    </a>
                </div>
            </div>
        </div>
    );
};
