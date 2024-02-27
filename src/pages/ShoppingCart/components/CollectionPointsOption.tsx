import React, { useState, ChangeEvent } from "react";

type TParcelMachine = {
    id: number;
    name: string;
    address: string;
};

const parcelMachineData: TParcelMachine[] = [
    {
        id: 1,
        name: "ParcelMachine 1",
        address: "Street 123, City, Country",
    },
    {
        id: 2,
        name: "ParcelMachine 2",
        address: "Avenue 456, City, Country",
    },
    {
        id: 3,
        name: "ParcelMachine 3",
        address: "Road 789, City, Country",
    },
];

export const CollectionPointsOption = () => {
    const [selectedParcelMachine, setSelectedParcelMachine] = useState("");
    const [parcelMachineAddress, setParcelMachineAddress] = useState("");

    const handleParcelMachineChange = (
        event: ChangeEvent<HTMLSelectElement>,
    ) => {
        const selectedParcelMachineId = parseInt(event.target.value);
        const selectedParcelMachineData: TParcelMachine | undefined =
            parcelMachineData.find(
                (parcelMachine) => parcelMachine.id === selectedParcelMachineId,
            );
        if (selectedParcelMachineData) {
            setSelectedParcelMachine(selectedParcelMachineData.name);
            setParcelMachineAddress(selectedParcelMachineData.address);
        }
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">
                Collection points and parcel machines
            </h5>
            <div className="card-body">
                <form>
                    <div className="row mb-3">
                        <label
                            htmlFor="inputParcelMachine"
                            className="col-sm-2 col-form-label"
                        >
                            Select ParcelMachine
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select"
                                id="inputParcelMachine"
                                onChange={handleParcelMachineChange}
                                value={selectedParcelMachine}
                            >
                                <option value="">Select a parcelMachine</option>
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
                                        value={parcelMachineAddress}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};
