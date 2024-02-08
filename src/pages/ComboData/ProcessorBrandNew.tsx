import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endpoints, links } from "../../config/links";
import axios from "axios";
import { Card } from "react-bootstrap";
import {
    TPBComboData,
    TProcessorBrandNew,
} from "../../types/ComboData/TProcessorBrands";

export const ProcessorBrandNew = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPBComboData>();
    const [brand, setBrand] = useState<TProcessorBrandNew>({
        name: "",
        processorBrandDeviceType: "",
    });

    const [error, setError] = useState<String>("");

    const { name, processorBrandDeviceType } = brand;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post(endpoints.processorBrands.getAll, brand);
            navigate(links.processorBrands);
        } catch (error: any) {
            if (error.response && error.response.data) {
                setError(error.response.data.message.toString());
            } else {
                setError(
                    "An error occurred while crating the new processor brand!",
                );
            }
        }
    };

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setBrand({ ...brand, [e.target.name]: e.target.value });
    };

    const getComboData = async () => {
        try {
            const result = await axios.get(endpoints.processorBrands.comboData);
            setComboData(result.data);
        } catch (e) {
            console.log("file: ProcessorBrandNew.tsx:  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getComboData();
    }, []);

    return (
        <>
            <div className="container my-2 px-2">
                <Card>
                    <Card.Header as="h5">Add new processor brand</Card.Header>
                    <Card.Body>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="row mb-3">
                                <label
                                    htmlFor="name"
                                    className="col-sm-2 col-form-label"
                                >
                                    Processor Brand Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={onInputChange}
                                        placeholder="Type processor brand name"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="processorBrandDeviceType"
                                    className="col-sm-2 col-form-label"
                                >
                                    Processor Brand Device Type
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        className="form-select col-sm-10"
                                        id="processorBrandDeviceType"
                                        name="processorBrandDeviceType"
                                        value={processorBrandDeviceType}
                                        onChange={onInputChange}
                                    >
                                        <option value="">
                                            Choose Brand Device Type
                                        </option>
                                        {comboData?.processorBrandDeviceTypes.map(
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
                                        Add processor brand
                                    </button>
                                    <a
                                        href={links.processorBrands}
                                        className="btn btn-outline-danger mx-2"
                                    >
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};
