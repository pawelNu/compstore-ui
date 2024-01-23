import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import hostName from "../../../config/config";
import { TPCComboData, TPCDetails } from "../../../types/PC/TPC";
import { initialPCDetails } from "./components/initialValues";

export const PCEdit: React.FC = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPCComboData>();
    const [pc, setPc] = useState<TPCDetails>(initialPCDetails);

    const { id } = useParams();

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

    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(`${hostName}/pcs/${id}`);
            setPc(result.data);
        } catch (e) {
            console.log("file: PCEdit.tsx:  getPc  error:", e);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await axios.put(`${hostName}/pcs/${id}`, pc);
            navigate("/pcs");
        } catch (e: any) {
            if (e.response && e.response.data) {
                setError(e.response.data.message.toString());
            } else {
                console.log("file: PCEdit.tsx:  onSubmit  else");
                setError("An error occurred while updating the pc!");
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
            console.log("file: EditPC.tsx:  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getPc(id);
        getComboData();
    }, [id]);

    return (
        <div className="container my-2 px-2">
            <div className="card">
                <h5 className="card-header">Edit PC</h5>
                <div className="card-body">
                    <div className="row mb-3">
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
                                        value={processorBrand.id}
                                        onChange={onInputChange}
                                    >
                                        <option value="">
                                            Choose Processor Brand
                                        </option>
                                        {comboData?.processorBrands.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data.id}
                                                >
                                                    {data.name}
                                                </option>
                                            ),
                                        )}
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
                                        placeholder="test"
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
                                        value={graphicsCardBrand.id}
                                        onChange={onInputChange}
                                    >
                                        <option value="">
                                            Choose Graphics Card Brand
                                        </option>
                                        {comboData?.graphicsCardBrands.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data.id}
                                                >
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
                                        placeholder="test"
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
                                        <option value="">
                                            Choose RAM Capacity
                                        </option>
                                        {comboData?.ramCapacities.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data}
                                                >
                                                    {data}
                                                </option>
                                            ),
                                        )}
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
                                        <option value="">
                                            Choose Drive Capacity
                                        </option>
                                        {comboData?.driveCapacities.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data}
                                                >
                                                    {data}
                                                </option>
                                            ),
                                        )}
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
                                        <option value="">
                                            Choose Drive Type
                                        </option>
                                        {comboData?.driveTypes.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data}
                                                >
                                                    {data}
                                                </option>
                                            ),
                                        )}
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
                                        value={operatingSystem.id}
                                        onChange={onInputChange}
                                    >
                                        <option value="">
                                            Choose Operating System
                                        </option>
                                        {comboData?.operatingSystems.map(
                                            (data, index) => (
                                                <option
                                                    key={index}
                                                    value={data.id}
                                                >
                                                    {data.name}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="price"
                                    className="col-sm-2 col-form-label"
                                >
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
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <div>
                                    {error && (
                                        <p className="text-danger">{error}</p>
                                    )}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-primary"
                                    >
                                        Save
                                    </button>
                                    <a
                                        href="/"
                                        className="btn btn-outline-danger mx-2"
                                    >
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
