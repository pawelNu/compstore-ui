import { useState } from "react";
import { deliveryMethods } from "../../../data/DeliveryMethodData";
import { DeliveryManOption } from "./DeliveryManOption";
import { PickupOption } from "./PickupOption";
import { CollectionPointsOption } from "./CollectionPointsOption";

export const DeliveryMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState("");

    const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMethod(event.target.value);
    };

    const renderForm = () => {
        switch (selectedMethod) {
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
                                    value={data.name}
                                    onChange={handleMethodChange}
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
            {renderForm()}
        </>
    );
};
