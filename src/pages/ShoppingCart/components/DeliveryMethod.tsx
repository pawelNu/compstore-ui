import { deliveryMethods } from "../../../data/DeliveryMethodData";
import "./../../../static/styles/DeliveryMethod.css";

export const DeliveryMethod = () => {
    return (
        <div className="card mb-2">
            <h5 className="card-header">Delivery method</h5>
            <div className="card-body">
                <div
                    className="btn-group-vertical w-100"
                    role="group"
                    aria-label="Vertical radio toggle button group"
                >
                    {deliveryMethods.map((data, index) => (
                        <div key={index} className="d-grid w-100 mb-2">
                            <input
                                type="radio"
                                className="btn-check"
                                name="deliveryMethod"
                                id={`deliveryMethod${index}`}
                                autoComplete="off"
                            />
                            <label
                                htmlFor={`deliveryMethod${index}`}
                                className="btn btn-outline-secondary border w-100"
                            >
                                <div className="card">
                                    <div className="card-body text-option">
                                        <h5
                                            className={`card-title ${
                                                index > -1
                                                    ? "text-secondary"
                                                    : ""
                                            }`}
                                        >
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
                    ))}
                </div>
            </div>
        </div>
    );
};
