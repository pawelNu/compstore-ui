import { Button, Modal } from "react-bootstrap";
import { TOrderResponse } from "../ShoppingCart";

type Props = {
    show: boolean;
    handleClose: () => void;
    handleOrderDelete: () => void;
    response: TOrderResponse | undefined;
};

export const OrderModal: React.FC<Props> = ({
    show,
    handleClose,
    handleOrderDelete,
    response,
}) => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    return (
        // TODO add a page informing about the number of products purchased and its price and confirming the purchase
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Order Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* TODO zrobić łądniejsze podusumowanie produktów bo jest brzydkie */}
                <div key={response?.id}></div>
                <div>
                    {response?.orderItems.map((data, index) => (
                        <div key={index}>
                            <div>{data.product.id}</div>
                            <div>{data.product.description}</div>
                            <div>{data.product.price}</div>
                            <div>{data.quantity}</div>
                        </div>
                    ))}
                </div>
                <div>{response?.price}</div>
                {/* TODO dodać sposób dostawy bo jeszcze nie ma go na modalu */}
                {/* TODO poszukać info czy nie da się poszerzyć tego modala bo aktualnie jest trochę za wąski wg mnie */}
            </Modal.Body>
            <Modal.Footer>
                {/* TODO zrobić order delete bo nie działa */}
                <Button variant="danger" onClick={handleOrderDelete}>
                    Delete order
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
