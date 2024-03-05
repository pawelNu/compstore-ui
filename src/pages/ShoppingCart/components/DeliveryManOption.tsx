import { useState } from "react";

const initialFormData: { [key: string]: string } = {
    "First Name": "",
    "Last Name": "",
    Email: "",
    City: "",
    ZipCode: "",
};

export const DeliveryManOption = () => {
    const [formData, setFormData] = useState(initialFormData);
    console.log(
        "file: DeliveryManOption.tsx   DeliveryManOption   formData:",
        formData,
    );

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">Delivery address</h5>
            <div className="card-body">
                {Object.keys(initialFormData).map((key, index) => (
                    <div className="row mb-3" key={index}>
                        <label
                            htmlFor={`input${key}`}
                            className="col-sm-2 col-form-label"
                        >
                            {key}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id={key}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
