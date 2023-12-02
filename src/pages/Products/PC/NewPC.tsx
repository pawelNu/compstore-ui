import axios from "axios";
import hostName from "../../../config/config";
import { PCComboData } from "../../../types/PCComboData";
import { useEffect, useState } from "react";

export const NewPC: React.FC = () => {
    const [comboData, setComboData] = useState<PCComboData>();

    const getComboData = async () => {
        try {
            const result = await axios.get(`${hostName}/pcs/combo-data`);
            setComboData(result.data);
        } catch (e) {
            console.log("file: NewPC.tsx:16  getComboData  e:", e);
            console.error("Error getting combo data: ", e);
            console.log("file: NewPC.tsx:18  getComboData  error");
        }
    };

    useEffect(() => {
        getComboData();
    }, [])

    return (
        <>
            <div className="row mb-3">
                <label
                    htmlFor="productCategory"
                    className="col-sm-2 col-form-label"
                >
                    Processor Brand
                </label>
                <div className="col-sm-10">
                    <select
                        className="form-select col-sm-10"
                        name="productCategory"
                        // value={selectedCategory}
                        // onChange={changeCategory}
                    >
                        <option value="">Choose Processor Brand</option>
                        {comboData?.processorBrands.map((data, index) => (
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="processorName"
                    className="col-sm-2 col-form-label"
                >
                    Processor Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="processorName"
                        placeholder="test"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="productCategory"
                    className="col-sm-2 col-form-label"
                >
                    Graphics Card Brand
                </label>
                <div className="col-sm-10">
                    <select
                        className="form-select col-sm-10"
                        name="productCategory"
                        // value={selectedCategory}
                        // onChange={changeCategory}
                    >
                        <option value="">Choose Graphics Card Brand</option>
                        {comboData?.graphicsCardBrands.map((data, index) => (
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="graphicsCardName"
                    className="col-sm-2 col-form-label"
                >
                    Graphics Card Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="graphicsCardName"
                        placeholder="test"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="ramGBCapacity"
                    className="col-sm-2 col-form-label"
                >
                    RAM GB Capacity
                </label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        className="form-control"
                        id="ramGBCapacity"
                        placeholder="test"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="driveGBCapacity"
                    className="col-sm-2 col-form-label"
                >
                    Drive GB Capacity
                </label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        className="form-control"
                        id="driveGBCapacity"
                        placeholder="test"
                    />
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="productCategory"
                    className="col-sm-2 col-form-label"
                >
                    Drive Type
                </label>
                <div className="col-sm-10">
                    <select
                        className="form-select col-sm-10"
                        name="productCategory"
                        // value={selectedCategory}
                        // onChange={changeCategory}
                    >
                        <option value="">Choose Drive Type</option>
                        {comboData?.driveTypes.map((data, index) => (
                            <option key={index} value={data}>{data}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label
                    htmlFor="productCategory"
                    className="col-sm-2 col-form-label"
                >
                    Operating System
                </label>
                <div className="col-sm-10">
                    <select
                        className="form-select col-sm-10"
                        name="productCategory"
                        // value={selectedCategory}
                        // onChange={changeCategory}
                    >
                        <option value="">Choose Operating System</option>
                        {comboData?.operatingSystems.map((data, index) => (
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="price" className="col-sm-2 col-form-label">
                    Price
                </label>
                <div className="col-sm-10">
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="test"
                    />
                </div>
            </div>
        </>
    );
};
