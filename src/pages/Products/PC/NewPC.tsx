import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hostName from "../../../config/config";
import { TAddNewPC } from "../../../types/TNewPC";
import { TPCComboData } from "../../../types/TPCComboData";

export const NewPC: React.FC = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPCComboData>();
    const [pc, setPc] = useState<TAddNewPC>({
        processorBrand: "string-string-string-string-string",
        processorName: "",
        graphicsCardBrand: "string-string-string-string-string",
        graphicsCardName: "",
        ramGBCapacity: 0,
        driveGBCapacity: 0,
        driveType: "",
        operatingSystem: "string-string-string-string-string",
        price: 0,
    });

    const [error, setError] = useState<String>("");

    const {
        processorBrand,
        processorName,
        graphicsCardBrand,
        graphicsCardName,
        ramGBCapacity,
        driveGBCapacity,
        driveType,
        operatingSystem,
        price,
    } = pc;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post(`${hostName}/pcs`, pc);
            navigate("/pcs");
            console.log("file: NewPC.tsx  onSubmit  pc:", pc);
        } catch (error: any) {
            console.log("file: NewPC.tsx  onSubmit  error:", error);
            if (error.response && error.response.data) {
                setError(error.response.data.toString());
            } else {
                setError("file: NewPC.tsx -> An error occurred while creating the new PC!");
            }
        }
    };

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setPc({ ...pc, [e.target.name]: e.target.value });
    };

    const getComboData = async () => {
        try {
            const result = await axios.get(`${hostName}/pcs/combo-data`);
            setComboData(result.data);
        } catch (e) {
            console.log("file: NewPC.tsx  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getComboData();
    }, []);

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="row mb-3">
                    <label
                        htmlFor="processorBrand"
                        className="col-sm-2 col-form-label"
                    >
                        Processor Brand
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="processorBrand"
                            name="processorBrand"
                            value={processorBrand}
                            onChange={onInputChange}
                        >
                            <option value="">Choose Processor Brand</option>
                            {comboData?.processorBrands.map((data, index) => (
                                <option key={index} value={data.id}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                        {error && <p className="text-danger">{error}</p>}
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
                            name="processorName"
                            value={processorName}
                            onChange={onInputChange}
                            placeholder="test"
                        />
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="graphicsCardBrand"
                        className="col-sm-2 col-form-label"
                    >
                        Graphics Card Brand
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="graphicsCardBrand"
                            name="graphicsCardBrand"
                            value={graphicsCardBrand}
                            onChange={onInputChange}
                        >
                            <option value="">Choose Graphics Card Brand</option>
                            {comboData?.graphicsCardBrands.map(
                                (data, index) => (
                                    <option key={index} value={data.id}>
                                        {data.name}
                                    </option>
                                ),
                            )}
                        </select>
                        {error && <p className="text-danger">{error}</p>}
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
                            name="graphicsCardName"
                            value={graphicsCardName}
                            onChange={onInputChange}
                            placeholder="test"
                        />
                        {error && <p className="text-danger">{error}</p>}
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
                            name="ramGBCapacity"
                            value={ramGBCapacity}
                            onChange={onInputChange}
                            placeholder="test"
                        />
                        {error && <p className="text-danger">{error}</p>}
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
                            name="driveGBCapacity"
                            value={driveGBCapacity}
                            onChange={onInputChange}
                            placeholder="test"
                        />
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="driveType"
                        className="col-sm-2 col-form-label"
                    >
                        Drive Type
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="driveType"
                            name="driveType"
                            value={driveType}
                            onChange={onInputChange}
                        >
                            <option value="">Choose Drive Type</option>
                            {comboData?.driveTypes.map((data, index) => (
                                <option key={index} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="operatingSystem"
                        className="col-sm-2 col-form-label"
                    >
                        Operating System
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="operatingSystem"
                            name="operatingSystem"
                            value={operatingSystem}
                            onChange={onInputChange}
                        >
                            <option value="">Choose Operating System</option>
                            {comboData?.operatingSystems.map((data, index) => (
                                <option key={index} value={data.id}>
                                    {data.name}
                                </option>
                            ))}
                        </select>
                        {error && <p className="text-danger">{error}</p>}
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
                            name="price"
                            value={price}
                            onChange={onInputChange}
                            placeholder="test"
                        />
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-primary">
                        Add product
                    </button>
                    <a href="/" className="btn btn-outline-danger mx-2">
                        Cancel
                    </a>
                </div>
            </form>
        </>
    );
};
