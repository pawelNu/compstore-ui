import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TPCComboData, TPCNew } from "../../../types/PC/TPC";
import { endpoints, links } from "../../../config/links";

export const PCNew: React.FC = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPCComboData>();
    const [pc, setPc] = useState<TPCNew>({
        processorBrand: "string-string-string-string-string",
        processorName: "",
        graphicsCardBrand: "string-string-string-string-string",
        graphicsCardName: "",
        ramCapacity: "",
        driveCapacity: "",
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
        ramCapacity,
        driveCapacity,
        driveType,
        operatingSystem,
        price,
    } = pc;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post(endpoints.pcs.addNew, pc);
            navigate(links.pcs);
        } catch (e: any) {
            console.log("file: NewPC.tsx  onSubmit  error:", e);
            if (e.response && e.response.data) {
                setError(e.response.data.message.toString());
            } else {
                setError("An error occurred while crating the new PC!");
            }
        }
    };

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;

        if (name === "price") {
            if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
                setPc({ ...pc, [e.target.name]: e.target.value });
            } else {
                setError("Price can have a maximum of two decimal places!");
            }
        } else {
            setPc({ ...pc, [e.target.name]: e.target.value });
        }
    };

    const getComboData = async () => {
        try {
            const result = await axios.get(endpoints.pcs.comboData);
            setComboData(result.data);
        } catch (e) {
            console.log("file: NewPC.tsx:  getComboData  e:", e);
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
                            placeholder="Enter processor name"
                        />
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
                            placeholder="Enter graphics card name"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="ramCapacity"
                        className="col-sm-2 col-form-label"
                    >
                        RAM GB Capacity
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="ramCapacity"
                            name="ramCapacity"
                            value={ramCapacity}
                            onChange={onInputChange}
                        >
                            <option value="">Choose RAM Capacity</option>
                            {comboData?.ramCapacities.map((data, index) => (
                                <option key={index} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="driveCapacity"
                        className="col-sm-2 col-form-label"
                    >
                        Drive GB Capacity
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-select col-sm-10"
                            id="driveCapacity"
                            name="driveCapacity"
                            value={driveCapacity}
                            onChange={onInputChange}
                        >
                            <option value="">Choose Drive Capacity</option>
                            {comboData?.driveCapacities.map((data, index) => (
                                <option key={index} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
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
                        />
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div>{error && <p className="text-danger">{error}</p>}</div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-outline-primary"
                        >
                            Add product
                        </button>
                        <a
                            href={links.mainPage}
                            className="btn btn-outline-danger mx-2"
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </form>
        </>
    );
};
