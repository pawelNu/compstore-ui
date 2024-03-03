import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
    ListGroup,
    Modal,
} from "react-bootstrap";
import { TOrderResponse } from "../ShoppingCart";
import { UUID } from "crypto";
import { Link } from "react-router-dom";
import { links } from "../../../config/links";
import { shoppingCartStyles } from "../../../static/styles/ShoppingCart";
import { formatPrice } from "../../../components/util";
import "./OrderModal.css";
import { TDeliveryMethod } from "../../../types/TDeliveryMethod";

type Props = {
    show: boolean;
    handleClose: () => void;
    handleOrderDelete: (
        id: UUID | undefined,
    ) => Promise<{ success: boolean; error?: string }>;
    response: TOrderResponse | undefined;
    delivery: TDeliveryMethod | undefined;
};

export const OrderModal: React.FC<Props> = ({
    show,
    handleClose,
    handleOrderDelete,
    response,
    delivery,
}) => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    return (
        <Modal show={show} onHide={() => handleOrderDelete(response?.id)}>
            <Modal.Header closeButton>
                <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CardBody>
                    {response?.orderItems.map((data) => (
                        <Card key={data.product.id} className="mb-2">
                            <CardBody>
                                <div className="d-flex">
                                    <div>
                                        <Link
                                            to={
                                                links.pcDetails +
                                                data.product.id
                                            }
                                        >
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
                                                        data.product.id
                                                    }
                                                    className="me-2"
                                                    style={
                                                        shoppingCartStyles.component
                                                    }
                                                >
                                                    <div>
                                                        {
                                                            data.product
                                                                .description
                                                        }
                                                    </div>
                                                </Link>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div>
                                                <div
                                                    style={
                                                        shoppingCartStyles.quantityAndPrice
                                                    }
                                                >
                                                    {data.quantity} x ${" "}
                                                    {formatPrice(
                                                        data.product.price,
                                                    )}
                                                </div>
                                                <div
                                                    style={
                                                        shoppingCartStyles.priceTag
                                                    }
                                                >
                                                    ${" "}
                                                    {formatPrice(
                                                        data.product.price *
                                                            data.quantity,
                                                    )}
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </CardBody>

                <Card className="mb-2">
                    <CardBody>
                        <div
                            className="me-3"
                            style={shoppingCartStyles.priceTag}
                        >
                            Total: $ {response?.price}
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader as={"h5"}>Delivery Method</CardHeader>
                    <CardBody>
                        <CardTitle>{delivery?.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted">
                            {delivery?.info}
                        </CardSubtitle>
                        <CardSubtitle className="mb-2 text-muted">
                            {delivery?.price}
                        </CardSubtitle>
                    </CardBody>
                </Card>

                {/* TODO dodać adres dostawy bo nie ma go jeszcze na modalu */}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={() => handleOrderDelete(response?.id)}
                >
                    Delete order
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
