import {
    TDeliveryMethodDetails,
    useShoppingCart,
} from "../../../redux/ShoppingCartProvider";

const initialFormData: TDeliveryMethodDetails = {
    "First Name": "",
    "Last Name": "",
    Email: "",
    City: "",
    ZipCode: "",
};

export const DeliveryManOption = () => {
    const { deliveryDetails = initialFormData, setUpDeliveryDetails } =
        useShoppingCart();

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setUpDeliveryDetails({ ...deliveryDetails, [id]: value });
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">Delivery address</h5>
            <div className="card-body">
                {Object.keys(initialFormData).map((key, index) => (
                    <div className="row mb-3" key={index}>
                        <label
                            htmlFor={key}
                            className="col-sm-2 col-form-label"
                        >
                            {key}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id={key}
                                value={deliveryDetails[key]}
                                onChange={handleChange}
                                autoComplete="true"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
