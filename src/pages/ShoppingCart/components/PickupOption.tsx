import { ChangeEvent, useState } from "react";

type TShop = {
    id: number;
    name: string;
    address: string;
    openingHours: string;
};

const shopData = [
    {
        id: 1,
        name: "Shop 1",
        address: "123 Main St, City, Country",
        openingHours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },
    {
        id: 2,
        name: "Shop 2",
        address: "456 Elm St, City, Country",
        openingHours: "Mon-Fri: 8AM-5PM, Sat: 10AM-3PM",
    },
    {
        id: 3,
        name: "Shop 3",
        address: "789 Oak St, City, Country",
        openingHours: "Mon-Fri: 10AM-7PM, Sat: Closed",
    },
];

export const PickupOption = () => {
    const [selectedShop, setSelectedShop] = useState("");
    const [shopAddress, setShopAddress] = useState("");
    const [shopOpeningHours, setShopOpeningHours] = useState("");

    const handleShopChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedShopId = parseInt(event.target.value);
        const selectedShopData: TShop | undefined = shopData.find(
            (shop) => shop.id === selectedShopId,
        );
        if (selectedShopData) {
            setSelectedShop(selectedShopData.name);
            setShopAddress(selectedShopData.address);
            setShopOpeningHours(selectedShopData.openingHours);
        }
    };

    return (
        <div className="card mb-2">
            <h5 className="card-header">
                Pick up in store with online payment
            </h5>
            <div className="card-body">
                <form>
                    <div className="row mb-3">
                        <label
                            htmlFor="inputShop"
                            className="col-sm-2 col-form-label"
                        >
                            Select Shop
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select"
                                id="inputShop"
                                onChange={handleShopChange}
                                value={selectedShop}
                            >
                                <option value="">Select a shop</option>
                                {shopData.map((shop) => (
                                    <option key={shop.id} value={shop.id}>
                                        {shop.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {selectedShop && (
                        <>
                            <div className="row mb-3">
                                <label
                                    htmlFor="shopAddress"
                                    className="col-sm-2 col-form-label"
                                >
                                    Address
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="shopAddress"
                                        value={shopAddress}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                    htmlFor="shopOpeningHours"
                                    className="col-sm-2 col-form-label"
                                >
                                    Opening Hours
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="shopOpeningHours"
                                        value={shopOpeningHours}
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
