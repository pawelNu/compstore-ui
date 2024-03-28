import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TPCComboData } from "../../../types/PC/TPC";
import { endpoints, links } from "../../../config/links";
import { toast } from "react-toastify";
import { defaultToastProps, toasts } from "../../../components/toasts/toastsConfig";
import Swal from "sweetalert2";
import { Loading } from "../../../components/spinner/Loading";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./components/FormProps";

export const PCNew: React.FC = () => {
    let navigate = useNavigate();
    const [comboData, setComboData] = useState<TPCComboData>();
    const [error, setError] = useState<String>("");
    const [loading, setLoading] = useState(true);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.post(endpoints.pcs.addNew, values);
                navigate(links.pcDetails + response.data.id);
                toast.success(toasts.createNewProduct.msg, defaultToastProps);
            } catch (e: any) {
                console.log("file: NewPC.tsx  onSubmit  error:", e);
                if (e.response && e.response.data && e.response.data.violations) {
                    const newErrors: Record<string, string> = {};
                    e.response.data.violations.forEach((violation: any) => {
                        newErrors[violation.field] = violation.message;
                    });
                    formik.setErrors(newErrors);
                } else if (e.response.data) {
                    const error = e.response.data;
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        html: `Error during adding new PC!<br/>
                    <b>Message:</b> ${error.detail}<br/>
                    <b>Status:</b> ${error.status} ${error.title}`,
                    });
                } else {
                    console.log("file: PCNew.tsx:  onSubmit  else");
                    setError("An error occurred while crating the new PC!");
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    const getComboData = async () => {
        try {
            const result = await axios.get(endpoints.pcs.comboData);
            setComboData(result.data);
            setLoading(false);
        } catch (e) {
            console.log("file: NewPC.tsx:  getComboData  e:", e);
        }
    };

    useEffect(() => {
        getComboData();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
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
                                placeholder="Enter processor name"
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
                                placeholder="Enter graphics card name"
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
                                {formik.errors.driveType && <p className="text-danger">{formik.errors.driveType}</p>}
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
                            />
                            <div>{formik.errors.price && <p className="text-danger">{formik.errors.price}</p>}</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                        <div>{error && <p className="text-danger">{error}</p>}</div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-outline-primary">
                                Add product
                            </button>
                            <a href={links.mainPage} className="btn btn-outline-danger mx-2">
                                Cancel
                            </a>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};
