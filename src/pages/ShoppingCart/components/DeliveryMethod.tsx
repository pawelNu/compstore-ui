import { deliveryMethods } from "../../../data/DeliveryMethodData";
// TODO make it so that the address to be selected is displayed only when a specific element is selected
export const DeliveryMethod = () => {
    return (
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
    );
};
