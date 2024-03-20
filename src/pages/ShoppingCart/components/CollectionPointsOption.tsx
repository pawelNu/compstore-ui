import React, { useState, ChangeEvent } from "react";
import {
    TDeliveryMethodDetails,
    useShoppingCart,
} from "../../../redux/ShoppingCartProvider";

type TParcelMachine = {
    id: number;
    name: string;
    address: string;
};

const parcelMachineData: TParcelMachine[] = [
    {
        id: 1,
        name: "Parcel Machine 1",
        address: "Street 123, City, Country",
    },
    {
        id: 2,
        name: "Parcel Machine 2",
        address: "Avenue 456, City, Country",
    },
    {
        id: 3,
        name: "Parcel Machine 3",
        address: "Road 789, City, Country",
    },
];

const initialFormData: TDeliveryMethodDetails = {
    Name: "",
    Address: "",
};

export const CollectionPointsOption = () => {
    const [selectedParcelMachine, setSelectedParcelMachine] = useState<
        number | undefined
    >();
    const { deliveryDetails = initialFormData, setUpDeliveryDetails } =
        useShoppingCart();

    const handleParcelMachineChange = (
        event: ChangeEvent<HTMLSelectElement>,
    ) => {
        const selectedParcelMachineId = parseInt(event.target.value);
        const selectedParcelMachineData: TParcelMachine | undefined =
            parcelMachineData.find(
                (parcelMachine) => parcelMachine.id === selectedParcelMachineId,
            );
        if (selectedParcelMachineData) {
            setSelectedParcelMachine(selectedParcelMachineData.id);
            setUpDeliveryDetails({
                ...deliveryDetails,
                Name: selectedParcelMachineData.name,
                Address: selectedParcelMachineData.address,
            });
        }
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">
                Collection points and parcel machines
            </h5>
            <div className="card-body">
                <div className="row mb-3">
                    <label
                        htmlFor="inputParcelMachine"
                        className="col-sm-2 col-form-label"
                    >
                        Select Parcel Machine
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select"
                            id="inputParcelMachine"
                            onChange={handleParcelMachineChange}
                            value={selectedParcelMachine}
                        >
                            <option value="">Select a parcel machine</option>
                            {parcelMachineData.map((parcelMachine) => (
                                <option
                                    key={parcelMachine.id}
                                    value={parcelMachine.id}
                                >
                                    {parcelMachine.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {selectedParcelMachine && (
                    <>
                        <div className="row mb-3">
                            <label
                                htmlFor="parcelMachineAddress"
                                className="col-sm-2 col-form-label"
                            >
                                Address
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="parcelMachineAddress"
                                    value={deliveryDetails.Address}
                                    readOnly
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
