import { DeliveryMethod } from "./components/DeliveryMethod";
import { shoppingCartStyles } from "../../static/styles/ShoppingCart";
import { endpoints, links } from "../../config/links";
import { Button, Card, CardBody, CardHeader, ListGroup } from "react-bootstrap";
import { TCartItem, useShoppingCart } from "../../redux/ShoppingCartProvider";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../../components/util";
import { UUID } from "crypto";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { OrderModal } from "./components/OrderModal";
import { toast } from "react-toastify";
import { toasts } from "../../config/toastsConfig";

type TShoppingCartItem = {
    id: UUID;
    description: string;
    price: number;
    quantity: number;
};

type TOrder = {
    orderItems: TCartItem[];
};

export type TOrderResponse = {
    id: UUID;
    orderItems: [
        {
            product: {
                id: UUID;
                description: string;
                price: number;
            };
            quantity: number;
        },
    ];
    price: number;
};

export const ShoppingCart = () => {
    const [shoppingList, setShoppingList] = useState<TShoppingCartItem[]>([]);
    const [itemList, setItemList] = useState<string[]>([]);
    const [isSelectedDelivery, setIsSelectedDelivery] =
        useState<boolean>(false);
    const [order, setOrder] = useState<TOrderResponse>();
    const [error, setError] = useState<String>("");
    const handleDeliveryMethodChange = (isSelected: boolean) => {
        setIsSelectedDelivery(isSelected);
    };
    const [showOrderModal, setShowOrderModal] = useState(false);

    let navigate = useNavigate();

    console.log("file: ShoppingCart.tsx:52   ShoppingCart   order:", order);

    const {
        shoppingCartList,
        clearCart,
        reduceProductQuantity,
        increaseProductQuantity,
        deleteFromCart,
    } = useShoppingCart();

    const countTotalPrice = shoppingList.reduce((total, product) => {
        const productTotal = product.price * product.quantity;
        return total + productTotal;
    }, 0);

    const totalPrice = formatPrice(countTotalPrice);

    const handleClose = () => {
        setShowOrderModal(false);
        toast.success(toasts.addingOrder.msg, toasts.addingOrder.props);
        clearCart();
        setError("");
    };

    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const getShoppingList = useCallback(
        async (itemList: string[]) => {
            try {
                const result = await axios.post<TShoppingCartItem[]>(
                    endpoints.products.getAll,
                    itemList,
                );

                const updatedShoppingList = result.data.map((item) => {
                    const correspondingQuantity = shoppingCartList.find(
                        (quantityItem) => quantityItem.product === item.id,
                    );
                    return {
                        ...item,
                        quantity: correspondingQuantity
                            ? correspondingQuantity.quantity
                            : 0,
                    };
                });

                setShoppingList(updatedShoppingList);
            } catch (e: any) {
                console.log(
                    "file: ShoppingCart.tsx:   getShoppingList   error:",
                    e,
                );
            }
        },
        [shoppingCartList],
    );

    const createOrder = async (e: React.MouseEvent) => {
        e.preventDefault();

        const orderItems: TOrder = {
            orderItems: shoppingCartList,
        };
        console.log(
            "file: ShoppingCart.tsx:94   createOrder   orderItems:",
            orderItems,
        );
        try {
            const result = await axios.post(
                endpoints.orders.addNew,
                orderItems,
            );
            console.log(
                "file: ShoppingCart.tsx:136   onSubmit   result:",
                result.data,
            );
            setOrder(result.data);
            setShowOrderModal(true);
            navigate(links.shoppingCart);
        } catch (e: any) {
            console.log("file: ShoppingCart.tsx   onSubmit   e:", e);
            if (e.response && e.response.data) {
                setError(e.response.data.message.toString());
            } else {
                setError("An error occurred while crating the new order!");
            }
        }
    };

    useEffect(() => {
        setItemList(shoppingCartList.map((item) => item.product));
    }, [shoppingCartList]);

    useEffect(() => {
        getShoppingList(itemList);
    }, [getShoppingList, itemList, shoppingCartList]);

    return (
        <div className="container p-2 mb-2">
            <Card>
                <CardHeader as="h5">Shopping Cart</CardHeader>
                <CardBody>
                    {shoppingList.length < 1 ? (
                        <Card className="mb-2">
                            <CardBody className="text-center">
                                <h3>Shopping cart is empty...</h3>
                            </CardBody>
                        </Card>
                    ) : null}
                    {shoppingList.map((product) => (
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
                                            <div className="d-flex justify-content-between align-items-end">
                                                <Link
                                                    to={
                                                        links.pcDetails +
                                                        product.id
                                                    }
                                                    className="me-2"
                                                    style={
                                                        shoppingCartStyles.component
                                                    }
                                                >
                                                    <div>
                                                        {product.description}
                                                    </div>
                                                </Link>

                                                <div className="d-flex">
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            deleteFromCart(
                                                                product.id,
                                                            )
                                                        }
                                                    >
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
                                                    {formatPrice(product.price)}
                                                </div>
                                                <div
                                                    style={
                                                        shoppingCartStyles.priceTag
                                                    }
                                                >
                                                    ${" "}
                                                    {formatPrice(
                                                        product.price *
                                                            product.quantity,
                                                    )}
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                    {shoppingList.length > 0 ? (
                        <Button
                            variant="danger"
                            className="mb-2"
                            onClick={clearCart}
                        >
                            Clear shopping cart
                        </Button>
                    ) : null}

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

                    <DeliveryMethod
                        onMethodChange={handleDeliveryMethodChange}
                    />
                    {shoppingCartList.length > 0 &&
                        isSelectedDelivery === true && (
                            <div className="d-flex justify-content-center mt-3">
                                {/* TODO add a page informing about the number of products purchased and its price and confirming the purchase  */}
                                {/* TODO dodać do przycisku Buy and pay onClick on submit */}
                                <Button
                                    variant="success"
                                    type="submit"
                                    onClick={(e) => createOrder(e)}
                                >
                                    Buy and pay
                                </Button>
                            </div>
                        )}
                </CardBody>
                <div className="d-flex justify-content-center mb-3">
                    <Link
                        className="btn btn-outline-secondary"
                        to={links.pcs}
                        role="button"
                    >
                        Back to shopping
                    </Link>
                </div>
            </Card>
            <OrderModal
                show={showOrderModal}
                handleClose={handleClose}
                handleOrderDelete={function (): void {
                    throw new Error("Function not implemented.");
                }}
                response={order}
            />
        </div>
    );
};
