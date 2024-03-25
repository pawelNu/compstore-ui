import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TPCComboData, TPCDetails, TPCUpdated } from "../../../types/PC/TPC";
import { initialPCDetails, initialPCUpdate } from "./components/initialValues";
import { endpoints, links } from "../../../config/links";
import { defaultToastProps, toasts } from "../../../components/toasts/toastsConfig";
import { toast } from "react-toastify";

export const PCEdit: React.FC = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPCComboData>();
    const [pc, setPc] = useState<TPCDetails>(initialPCDetails);
    console.log("file: PCEdit.tsx:18   pc:", pc);
    const [updatedPc, setUpdatedPc] = useState<TPCUpdated>(initialPCUpdate);
    console.log("file: PCEdit.tsx:20   updatedPc:", updatedPc);

    const { id } = useParams();

    const [error, setError] = useState<String>("");
    const [errors, setErrors] = useState<Record<string, string>>({});

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

    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(endpoints.pcs.byId + id);
            const pc = result.data;
            setPc(pc);
        } catch (e) {
            console.log("file: PCEdit.tsx:  getPc  error:", e);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        try {
            const response = await axios.put(endpoints.pcs.byId + id, updatedPc);
            navigate(links.pcDetails + response.data.id);
            toast.success(toasts.updateProduct.msg, defaultToastProps);
        } catch (e: any) {
            if (e.response.data) {
                const newErrors: Record<string, string> = {};
                e.response.data.violations.forEach((violation: any) => {
                    newErrors[violation.field] = violation.message;
                });
                setErrors(newErrors);
            } else {
                console.log("file: PCEdit.tsx:  onSubmit  else");
                setError("An error occurred while updating the pc!");
            }
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "price") {
            if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
                setPc({ ...pc, [e.target.name]: e.target.value });
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
            console.log("file: EditPC.tsx:  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getComboData();
        getPc(id);
    }, [id]);

    useEffect(() => {
        setUpdatedPc({
            processorBrand: pc.processorBrand.id,
            processorName: pc.processorName,
            graphicsCardBrand: pc.graphicsCardBrand.id,
            graphicsCardName: pc.graphicsCardName,
            ramCapacity: pc.ramCapacity,
            driveCapacity: pc.driveCapacity,
            driveType: pc.driveType,
            operatingSystem: pc.operatingSystem.id,
            price: pc.price,
        });
    }, [pc]);

    return (
        <div className="container my-2 px-2">
            <div className="card">
                <h5 className="card-header">Edit PC</h5>
                <div className="card-body">
                    <div className="row mb-3">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="row mb-3">
                                <label htmlFor="processorBrand" className="col-sm-2 col-form-label">
                                    Processor Brand
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="processorBrand"
                                        name="processorBrand"
                                        value={processorBrand.id}
                                        onChange={onInputChange}>
                                        <option value="">Choose Processor Brand</option>
                                        {comboData?.processorBrands.map((data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div>
                                        {errors.processorBrand && (
                                            <p className="text-danger">{errors.processorBrand}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="processorName" className="col-sm-2 col-form-label">
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
                                    <div>
                                        {errors.processorName && <p className="text-danger">{errors.processorName}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="graphicsCardBrand" className="col-sm-2 col-form-label">
                                    Graphics Card Brand
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="graphicsCardBrand"
                                        name="graphicsCardBrand"
                                        value={graphicsCardBrand.id}
                                        onChange={onInputChange}>
                                        <option value="">Choose Graphics Card Brand</option>
                                        {comboData?.graphicsCardBrands.map((data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div>
                                        {errors.graphicsCardBrand && (
                                            <p className="text-danger">{errors.graphicsCardBrand}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="graphicsCardName" className="col-sm-2 col-form-label">
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
                                    <div>
                                        {errors.graphicsCardName && (
                                            <p className="text-danger">{errors.graphicsCardName}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="ramCapacity" className="col-sm-2 col-form-label">
                                    RAM GB Capacity
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="ramCapacity"
                                        name="ramCapacity"
                                        value={ramCapacity}
                                        onChange={onInputChange}>
                                        <option value="">Choose RAM Capacity</option>
                                        {comboData?.ramCapacities.map((data, index) => (
                                            <option key={index} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                    <div>
                                        {errors.ramCapacity && <p className="text-danger">{errors.ramCapacity}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="driveCapacity" className="col-sm-2 col-form-label">
                                    Drive GB Capacity
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="driveCapacity"
                                        name="driveCapacity"
                                        value={driveCapacity}
                                        onChange={onInputChange}>
                                        <option value="">Choose Drive Capacity</option>
                                        {comboData?.driveCapacities.map((data, index) => (
                                            <option key={index} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                    <div>
                                        {errors.driveCapacity && <p className="text-danger">{errors.driveCapacity}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="driveType" className="col-sm-2 col-form-label">
                                    Drive Type
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="driveType"
                                        name="driveType"
                                        value={driveType}
                                        onChange={onInputChange}>
                                        <option value="">Choose Drive Type</option>
                                        {comboData?.driveTypes.map((data, index) => (
                                            <option key={index} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                    <div>{errors.driveType && <p className="text-danger">{errors.driveType}</p>}</div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="operatingSystem" className="col-sm-2 col-form-label">
                                    Operating System
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="operatingSystem"
                                        name="operatingSystem"
                                        value={operatingSystem.id}
                                        onChange={onInputChange}>
                                        <option value="">Choose Operating System</option>
                                        {comboData?.operatingSystems.map((data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select>
                                    <div>
                                        {errors.operatingSystem && (
                                            <p className="text-danger">{errors.operatingSystem}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="price" className="col-sm-2 col-form-label">
                                    Price
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={price}
                                        onChange={onInputChange}
                                        placeholder="test"
                                    />
                                    <div>{errors.price && <p className="text-danger">{errors.price}</p>}</div>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <div>{error && <p className="text-danger">{error}</p>}</div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-outline-primary">
                                        Save
                                    </button>
                                    <a href={links.mainPage} className="btn btn-outline-danger mx-2">
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
