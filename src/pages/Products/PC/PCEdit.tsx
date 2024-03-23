import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { endpoints, links } from "../../../config/links";
import {
    defaultToastProps,
    toasts,
} from "../../../components/toasts/toastsConfig";
import { TPCComboData, TPCDetails, TPCUpdated } from "../../../types/PC/TPC";
import { initialPCDetails, initialPCUpdate } from "./components/initialValues";

export const PCEdit: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pc, setPc] = useState<TPCDetails>(initialPCDetails);
    console.log("file: PCEdit.tsx:15   pc:", pc);
    const [updatedPc, setUpdatedPc] = useState<TPCUpdated>(initialPCUpdate);
    console.log("file: PCEdit.tsx:17   updatedPc:", updatedPc);
    const [comboData, setComboData] = useState<TPCComboData>();
    const [error, setError] = useState<string>("");

    // const {
    //     processorBrand,
    //     processorName,
    //     graphicsCardBrand,
    //     graphicsCardName,
    //     ramCapacity,
    //     driveCapacity,
    //     driveType,
    //     operatingSystem,
    //     price,
    // } = pc;

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
            price: "",
        },

        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await axios.put(
                    endpoints.pcs.byId + id,
                    values,
                );
                navigate(links.pcDetails + response.data.id);
                toast.success(toasts.updateProduct.msg, defaultToastProps);
            } catch (error: any) {
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.violations
                ) {
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
            setPc(pc);
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
        } catch (e) {
            console.log("file: PCEdit.tsx:  getPc  error:", e);
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

    return (
        <div className="container my-2 px-2">
            <div className="card">
                <h5 className="card-header">Edit PC</h5>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
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
                                    value={formik.values.processorBrand}
                                    onChange={formik.handleChange}
                                >
                                    <option value="">
                                        Choose Processor Brand
                                    </option>
                                    {comboData?.processorBrands.map(
                                        (data, index) => (
                                            <option key={index} value={data.id}>
                                                {data.name}
                                            </option>
                                        ),
                                    )}
                                </select>
                                <div>
                                    {formik.errors.processorBrand && (
                                        <p className="text-danger">
                                            {formik.errors.processorBrand}
                                        </p>
                                    )}
                                </div>
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
                                    value={formik.values.processorName}
                                    onChange={formik.handleChange}
                                    placeholder="test"
                                />
                                <div>
                                    {formik.errors.processorName && (
                                        <p className="text-danger">
                                            {formik.errors.processorName}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* TODO przenieść resztę pól */}
                        {/* z C:\Users\pawel.nurzynski\Desktop\Folder\projects\compstore\ui\src\pages\Products\PC\PCEdit copy.tsx */}

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
                                    href={links.mainPage}
                                    className="btn btn-outline-danger mx-2"
                                >
                                    Cancel
                                </a>
                            </div>
                        </div>
                    </form>
                    {error && <p className="text-danger">{error}</p>}
                </div>
            </div>
        </div>
    );
};
