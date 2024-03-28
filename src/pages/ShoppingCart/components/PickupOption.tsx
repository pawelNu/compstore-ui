import { ChangeEvent, useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { TDeliveryMethodDetails, useShoppingCart } from "../../../redux/ShoppingCartProvider";

type TShop = {
    id: number;
    name: string;
    address: string;
    openingHours: string;
};

const shopData: TShop[] = [
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

const initialFormData: TDeliveryMethodDetails = {
    Name: "",
    Address: "",
    "Opening Hours": "",
};

export const PickupOption = () => {
    const [selectedShop, setSelectedShop] = useState<number | undefined>();
    const { deliveryDetails = initialFormData, setUpDeliveryDetails } = useShoppingCart();

    const handleShopChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedShopId = parseInt(event.target.value);
        const selectedShopData: TShop | undefined = shopData.find((shop) => shop.id === selectedShopId);
        if (selectedShopData) {
            setSelectedShop(selectedShopData.id);
            setUpDeliveryDetails({
                ...deliveryDetails,
                Name: selectedShopData.name,
                Address: selectedShopData.address,
                "Opening Hours": selectedShopData.openingHours,
            });
        }
    };

    return (
        <Card className="mb-2">
            <CardHeader as={"h5"}>Pick up in store with online payment</CardHeader>
            <CardBody>
                <div className="row mb-3">
                    <label htmlFor="inputShop" className="col-sm-2 col-form-label">
                        Select Shop
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="inputShop" onChange={handleShopChange} value={selectedShop}>
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
                            <label htmlFor="shopAddress" className="col-sm-2 col-form-label">
                                Address
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="shopAddress"
                                    value={deliveryDetails.Address}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="shopOpeningHours" className="col-sm-2 col-form-label">
                                Opening Hours
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="shopOpeningHours"
                                    value={deliveryDetails["Opening Hours"]}
                                    readOnly
                                />
                            </div>
                        </div>
                    </>
                )}
            </CardBody>
        </Card>
    );
};
