import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, links } from "../../../config/links";
import { defaultToastProps, toasts } from "../../../components/toasts/toastsConfig";
import { TPCComboData } from "../../../types/PC/TPC";
import * as Yup from "yup";
import { Loading } from "../../../components/spinner/Loading";

export const PCEdit: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [comboData, setComboData] = useState<TPCComboData>();
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(true);

    const formik = useFormik({
        initialValues: {
            processorBrand: "",
            processorName: "",
            graphicsCardBrand: "",
            graphicsCardName: "",
            ramCapacity: "",
            driveCapacity: "",
            driveType: "",
            operatingSystem: "",
            price: 0,
        },

        validationSchema: Yup.object().shape({
            processorBrand: Yup.string().required("Processor brand is required"),
            processorName: Yup.string().required("Processor name is required"),
            graphicsCardBrand: Yup.string().required("Graphic card brand is required"),
            graphicsCardName: Yup.string().required("Graphic card name is required"),
            ramCapacity: Yup.string().required("Ram capacity is required"),
            driveCapacity: Yup.string().required("Drive capacity is required"),
            driveType: Yup.string().required("Drive type is required"),
            operatingSystem: Yup.string().required("Operating system is required"),
            price: Yup.number()
                .typeError("Price must be a number")
                .required("Price is required")
                .positive("Price must be positive")
                .max(999999.99, "Price must be less than 999 999.99")
                .test("is-decimal", "Price must have no more than two decimal places", (value) => {
                    const regex = /^\d+(\.\d{1,2})?$/;
                    return regex.test(value ? value.toString() : "");
                }),
        }),

        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.put(endpoints.pcs.byId + id, values);
                navigate(links.pcDetails + response.data.id);
                toast.success(toasts.updateProduct.msg, defaultToastProps);
            } catch (error: any) {
                if (error.response && error.response.data && error.response.data.violations) {
                    const newErrors: Record<string, string> = {};
                    error.response.data.violations.forEach((violation: any) => {
                        newErrors[violation.field] = violation.message;
                    });
                    formik.setErrors(newErrors);
                } else {
                    setError("An error occurred while updating the pc!");
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(endpoints.pcs.byId + id);
            const pc = result.data;
            formik.setValues({
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
            setLoading(false);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError("PC not found");
            } else {
                setError("An error occurred while fetching PC data");
            }
            console.error("Error fetching PC data:", error);
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

    // TODO pomyśleć jak to poprawić
    // React Hook useEffect has a missing dependency: 'getPc'. Either include it or remove the dependency array.
    useEffect(() => {
        getComboData();
        getPc(id);
    }, [id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="container my-2 px-2">
                    <div className="card">
                        <h5 className="card-header">Edit PC</h5>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="processorBrand" className="col-sm-2 col-form-label">
                                        Processor Brand
                                    </label>
                                    <div className="col-sm-10">
                                        <select
                                            className="form-select col-sm-10"
                                            id="processorBrand"
                                            name="processorBrand"
                                            value={formik.values.processorBrand}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose Processor Brand</option>
                                            {comboData?.processorBrands.map((data, index) => (
                                                <option key={index} value={data.id}>
                                                    {data.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.processorBrand && (
                                                <p className="text-danger">{formik.errors.processorBrand}</p>
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
                                            value={formik.values.processorName}
                                            onChange={formik.handleChange}
                                            placeholder="test"
                                        />
                                        <div>
                                            {formik.errors.processorName && (
                                                <p className="text-danger">{formik.errors.processorName}</p>
                                            )}
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
                                            value={formik.values.graphicsCardBrand}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose Graphics Card Brand</option>
                                            {comboData?.graphicsCardBrands.map((data, index) => (
                                                <option key={index} value={data.id}>
                                                    {data.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.graphicsCardBrand && (
                                                <p className="text-danger">{formik.errors.graphicsCardBrand}</p>
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
                                            value={formik.values.graphicsCardName}
                                            onChange={formik.handleChange}
                                            placeholder="test"
                                        />
                                        <div>
                                            {formik.errors.graphicsCardName && (
                                                <p className="text-danger">{formik.errors.graphicsCardName}</p>
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
                                            value={formik.values.ramCapacity}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose RAM Capacity</option>
                                            {comboData?.ramCapacities.map((data, index) => (
                                                <option key={index} value={data}>
                                                    {data}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.ramCapacity && (
                                                <p className="text-danger">{formik.errors.ramCapacity}</p>
                                            )}
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
                                            value={formik.values.driveCapacity}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose Drive Capacity</option>
                                            {comboData?.driveCapacities.map((data, index) => (
                                                <option key={index} value={data}>
                                                    {data}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.driveCapacity && (
                                                <p className="text-danger">{formik.errors.driveCapacity}</p>
                                            )}
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
                                            value={formik.values.driveType}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose Drive Type</option>
                                            {comboData?.driveTypes.map((data, index) => (
                                                <option key={index} value={data}>
                                                    {data}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.driveType && (
                                                <p className="text-danger">{formik.errors.driveType}</p>
                                            )}
                                        </div>
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
                                            value={formik.values.operatingSystem}
                                            onChange={formik.handleChange}>
                                            <option value="">Choose Operating System</option>
                                            {comboData?.operatingSystems.map((data, index) => (
                                                <option key={index} value={data.id}>
                                                    {data.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div>
                                            {formik.errors.operatingSystem && (
                                                <p className="text-danger">{formik.errors.operatingSystem}</p>
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
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            name="price"
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            placeholder="test"
                                        />
                                        <div>
                                            {formik.errors.price && (
                                                <p className="text-danger">{formik.errors.price}</p>
                                            )}
                                        </div>
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
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
