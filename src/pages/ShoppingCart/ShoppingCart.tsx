import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { DeliveryMethod } from "./components/DeliveryMethod";
import { shoppingCartStyles } from "../../static/styles/ShoppingCart";
import { links } from "../../config/links";
import { Button, Card, CardBody, CardHeader, ListGroup } from "react-bootstrap";
import { useShoppingCart } from "../../redux/ShoppingCartProvider";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
    const {
        shoppingCartList,
        clearCart,
        reduceProductQuantity,
        increaseProductQuantity,
    } = useShoppingCart();

    const totalPrice = shoppingCartList
        .reduce((total, product) => {
            const productTotal = product.price * product.quantity;
            return total + productTotal;
        }, 0)
        .toFixed(2);

    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    return (
        <div className="container p-2 mb-2">
            <Card>
                <CardHeader as="h5">Shopping Cart</CardHeader>
                <CardBody>
                    {shoppingCartList.map((product) => (
                        <Card key={product.id} className="mb-2">
                            <CardBody>
                                <div className="d-flex">
                                    <div>
                                        <Link to={links.pcDetails + product.id}>
                                            <img
                                                src={imagePlaceholder}
                                                className="img-fluid rounded-start"
                                                style={
                                                    shoppingCartStyles.productImage
                                                }
                                                alt="Product"
                                            />
                                        </Link>
                                    </div>
                                    <ListGroup variant="flush w-100">
                                        <ListGroup.Item>
                                            <div className="d-flex justify-content-between">
                                                <Link
                                                    to={
                                                        links.pcDetails +
                                                        product.id
                                                    }
                                                    style={
                                                        shoppingCartStyles.component
                                                    }
                                                >
                                                    PC - {product.processorName}{" "}
                                                    - {product.graphicsCardName}{" "}
                                                    System:{" "}
                                                    {
                                                        product.operatingSystem
                                                            .name
                                                    }
                                                    , RAM: {product.ramCapacity}
                                                    , Drive:{" "}
                                                    {product.driveCapacity}{" "}
                                                    {product.driveType}
                                                </Link>
                                                <div className="d-flex">
                                                    {/* TODO create function for delete product from shopping cart */}
                                                    <Button variant="danger">
                                                        Delete
                                                    </Button>
                                                    <div className="col-1 vr mx-2"></div>
                                                    <Button
                                                        variant="primary"
                                                        style={
                                                            shoppingCartStyles.btnText
                                                        }
                                                        onClick={() =>
                                                            reduceProductQuantity(
                                                                product.id,
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </Button>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center border border-primary rounded-3 mx-1"
                                                        style={
                                                            shoppingCartStyles.quantity
                                                        }
                                                    >
                                                        {product.quantity}
                                                    </div>
                                                    <Button
                                                        variant="primary"
                                                        style={
                                                            shoppingCartStyles.btnText
                                                        }
                                                        onClick={() =>
                                                            increaseProductQuantity(
                                                                product.id,
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div>
                                                <div
                                                    style={
                                                        shoppingCartStyles.quantityAndPrice
                                                    }
                                                >
                                                    {product.quantity} x ${" "}
                                                    {product.price}
                                                </div>
                                                <div
                                                    style={
                                                        shoppingCartStyles.priceTag
                                                    }
                                                >
                                                    ${" "}
                                                    {(
                                                        product.price *
                                                        product.quantity
                                                    ).toFixed(2)}
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                    <Button
                        variant="danger"
                        className="mb-2"
                        onClick={clearCart}
                    >
                        Clear shopping cart
                    </Button>
                    <Card className="mb-2">
                        <CardBody>
                            <div
                                className="me-3"
                                style={shoppingCartStyles.priceTag}
                            >
                                Total: $ {totalPrice}
                            </div>
                        </CardBody>
                    </Card>

                    <DeliveryMethod />
                    <DeliveryAddressForm />
                </CardBody>
                <div className="d-flex justify-content-center mb-3">
                    <a
                        className="btn btn-outline-secondary"
                        href={links.pcs}
                        role="button"
                    >
                        Back to shopping
                    </a>
                </div>
            </Card>
        </div>
    );
};
