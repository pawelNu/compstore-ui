import { useState } from "react";
import { productsPC } from "../../data/ProductsPCData";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { DeliveryMethod } from "./components/DeliveryMethod";
import { shoppingCartStyles } from "../../static/styles/ShoppingCart";
import { links } from "../../config/links";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../redux/ShoppingCartProvider";

export const ShoppingCart = () => {
    const { list, clearCart } = useShoppingCart();

    const handleClearCart = () => {
        clearCart();
    };

    const selectedIds = [
        "a3d898f3-4eb1-4568-8a40-df7c5fe6089e",
        "be6d4db2-beec-43f7-88b1-49212613e44e",
    ];
    const initialSelectedPC = productsPC.filter((data) =>
        selectedIds.includes(data.id),
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
        0,
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
                                                <button className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <div className="col-1 vr mx-2"></div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={
                                                        shoppingCartStyles.btnText
                                                    }
                                                    onClick={() =>
                                                        handleDecrement(index)
                                                    }>
                                                    -
                                                </button>
                                                <input
                                                    className="form-control"
                                                    style={
                                                        shoppingCartStyles.inputField
                                                    }
                                                    type="number"
                                                    value={data.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className="btn btn-primary"
                                                    style={
                                                        shoppingCartStyles.btnText
                                                    }
                                                    onClick={() =>
                                                        handleIncrement(index)
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            style={
                                                shoppingCartStyles.component
                                            }>
                                            {data.feature
                                                .map(
                                                    (feature) =>
                                                        `${feature.featureName} ${feature.value}`,
                                                )
                                                .join(", ")}
                                        </div>
                                    </li>
                                    <div>
                                        <div
                                            style={
                                                shoppingCartStyles.quantityAndPrice
                                            }>
                                            {data.quantity} x $ {data.price}
                                        </div>
                                        <div
                                            style={shoppingCartStyles.priceTag}>
                                            $ {data.price * data.quantity}
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="card mb-2">
                        <div
                            className="card-body"
                            style={shoppingCartStyles.priceTag}>
                            <div>Total: $ {totalPrice}</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Shopping Cart</h2>
                            <ul>
                                {list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="danger" className="mb-2" onClick={handleClearCart}>
                            Clear shopping cart
                        </Button>
                    </div>

                    <DeliveryMethod />
                    <DeliveryAddressForm />
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <a
                        className="btn btn-outline-danger"
                        href={links.pcs}
                        role="button">
                        Back to shopping
                    </a>
                </div>
            </div>
        </div>
    );
};
