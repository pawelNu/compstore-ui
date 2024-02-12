import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { endpoints, links } from "../../../config/links";
import {
    TPBComboData,
    TProcessorBrandNew,
    TPBUpdated,
} from "../../../types/ComboData/TProcessorBrands";

export const ProcessorBrandsEdit = () => {
    let navigate = useNavigate();

    const [comboData, setComboData] = useState<TPBComboData>();
    const [brand, setBrand] = useState<TProcessorBrandNew>({
        name: "",
        processorBrandDeviceType: "",
    });

    const { id } = useParams();

    const [error, setError] = useState<String>("");

    const { name, processorBrandDeviceType } = brand;

    const updatedBrand: TPBUpdated = {
        name: name,
        processorBrandDeviceType: processorBrandDeviceType,
    };

    const getBrand = async (id: string | undefined) => {
        try {
            const result = await axios.get(endpoints.processorBrands.byId + id);
            setBrand(result.data);
        } catch (e) {
            console.log("file: ProcessorBrandsEdit.tsx:  getBrand  e:", e);
        }
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await axios.put(endpoints.processorBrands.byId + id, updatedBrand);
            navigate(links.processorBrands);
        } catch (e: any) {
            if (e.response && e.response.data) {
                setError(e.response.data.message.toString());
            } else {
                console.log("file: ProcessorBrandsEdit.tsx:  onSubmit  else");
                setError(
                    "An error occurred while updating the processor brand!",
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
            console.log("file: ProcessorBrandsEdit.tsx:  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getBrand(id);
        getComboData();
    }, [id]);

    return (
        <div className="container my-2 px-2">
            <Card>
                <Card.Header as="h5">Edit processor brand</Card.Header>
                <Card.Body>
                    <div className="row mb-3">
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
                                        placeholder="test"
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
                                        Save
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
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};
