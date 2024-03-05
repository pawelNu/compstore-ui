import React, { useState } from "react";

export const DeliveryManOption = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        zipCode: "",
    });

    const handleChange = (e: { target: { id: any; value: any } }) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">Delivery address</h5>
            <div className="card-body">
                <div className="row mb-3">
                    <label
                        htmlFor="inputFirstName"
                        className="col-sm-2 col-form-label"
                    >
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputLastName"
                        className="col-sm-2 col-form-label"
                    >
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputCity"
                        className="col-sm-2 col-form-label"
                    >
                        City
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputZipCode"
                        className="col-sm-2 col-form-label"
                    >
                        ZipCode
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
