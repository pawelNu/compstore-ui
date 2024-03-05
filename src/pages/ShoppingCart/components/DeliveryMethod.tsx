import { deliveryMethods } from "../../../data/DeliveryMethodData";
import { DeliveryManOption } from "./DeliveryManOption";
import { PickupOption } from "./PickupOption";
import { CollectionPointsOption } from "./CollectionPointsOption";
import {
    Card,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
} from "react-bootstrap";
import { useShoppingCart } from "../../../redux/ShoppingCartProvider";

export type TDeliveryMethod = {
    name: string;
    info: string;
    price: string;
};

export const DeliveryMethod = () => {
    const { deliveryMethod, chooseDeliveryMethod, setUpDeliveryDetails } =
        useShoppingCart();

    const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const chosenMethod = deliveryMethods.find(
            (method) => method.name === event.target.value,
        );
        setUpDeliveryDetails(undefined);
        chooseDeliveryMethod(chosenMethod);
    };

    const renderForm = () => {
        switch (deliveryMethod?.name) {
            case "Delivery man":
                return <DeliveryManOption />;
            case "Pick up in store with online payment":
                return <PickupOption />;
            case "Collection points and parcel machines":
                return <CollectionPointsOption />;
            default:
                return null;
        }
    };

    return (
        <>
            <Card className="mb-2">
                <CardHeader as={"h5"}>Delivery method</CardHeader>
                <CardBody className="card-body">
                    {deliveryMethods.map((data, index) => (
                        <div key={index} className="mb-2">
                            <div className="form-check d-flex align-items-center">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="deliveryMethod"
                                    id={`deliveryMethod${index}`}
                                    value={data.name}
                                    onChange={handleMethodChange}
                                />
                                <label
                                    htmlFor={`deliveryMethod${index}`}
                                    className="form-check-label ms-2 w-100"
                                >
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{data.name}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted">
                                                {data.info}
                                            </CardSubtitle>
                                            <CardSubtitle className="mb-2 text-muted">
                                                {data.price}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </label>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
            {renderForm()}
        </>
    );
};
