import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import hostName from "../../../config/config";
import { TPCComboData, TPCDetails, TPCUpdated } from "../../../types/PC/TPC";
import { initialPCDetails } from "./components/initialValues";
import { FormField } from "../../../components/fields/FormField";
import { labels } from "./config";
import { Button } from "react-bootstrap";
import { endpoints, links } from "../../../config/links";

const validationSchema = Yup.object().shape({
    processorBrand: Yup.string().required("Processor Brand is required"),
    processorName: Yup.string().required("Processor Name is required"),
    graphicsCardBrand: Yup.string().required("Graphics Card Brand is required"),
    graphicsCardName: Yup.string().required("Graphics Card Name is required"),
    ramCapacity: Yup.string().required("RAM Capacity is required"),
    driveCapacity: Yup.string().required("Drive Capacity is required"),
    driveType: Yup.string().required("Drive Type is required"),
    operatingSystem: Yup.string().required("Operating System is required"),
    price: Yup.number().required("Price is required"),
});

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
            const result = await axios.get(endpoints.pcs.byId + id);
            setPc(result.data);
        } catch (e) {
            console.log("file: PCEdit.tsx: getPc error:", e);
        }
    };

    const onSubmit = async (values: TPCDetails) => {
        const updatedPc: TPCUpdated = {
            processorBrand: values.processorBrand.id,
            processorName: values.processorName,
            graphicsCardBrand: values.graphicsCardBrand.id,
            graphicsCardName: values.graphicsCardName,
            ramCapacity: values.ramCapacity,
            driveCapacity: values.driveCapacity,
            driveType: values.driveType,
            operatingSystem: values.operatingSystem.id,
            price: values.price,
        };
        console.log(
            "file: PCEdit_new.tsx:71   onSubmit   updatedPc:",
            updatedPc,
        );

        try {
            await axios.put(endpoints.pcs.byId + id, updatedPc);
            navigate(links.pcs);
        } catch (e: any) {
            if (e.response && e.response.data) {
                setError(e.response.data.message.toString());
            } else {
                console.log("file: PCEdit.tsx: onSubmit else");
                setError("An error occurred while updating the pc!");
            }
        }
    };

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        console.log("PCEdit.tsx onInputChange:", e.target.name, e.target.value);
        setPc({ ...pc, [e.target.name]: e.target.value });
    };

    const getComboData = async () => {
        try {
            const result = await axios.get(endpoints.pcs.comboData);
            setComboData(result.data);
        } catch (e) {
            console.log("file: EditPC.tsx: getComboData e:", e);
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
                    <Formik
                        initialValues={pc}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <FormField
                                label={labels.processorBrand.label}
                                fieldType={labels.processorBrand.fieldType}
                                id={labels.processorBrand.id}
                                name={labels.processorBrand.id}
                                value={processorBrand.id}
                                options={comboData?.processorBrands}
                            />

                            <FormField
                                label={labels.processorName.label}
                                fieldType={labels.processorName.fieldType}
                                id={labels.processorName.id}
                                name={labels.processorName.id}
                                value={processorName}
                            />

                            <FormField
                                label={labels.graphicsCardBrand.label}
                                fieldType={labels.graphicsCardBrand.fieldType}
                                id={labels.graphicsCardBrand.id}
                                name={labels.graphicsCardBrand.id}
                                value={graphicsCardBrand.id}
                                options={comboData?.graphicsCardBrands}
                            />

                            <FormField
                                label={labels.graphicsCardName.label}
                                fieldType={labels.graphicsCardName.fieldType}
                                id={labels.graphicsCardName.id}
                                name={labels.graphicsCardName.id}
                                value={graphicsCardName}
                            />

                            <FormField
                                label={labels.ramCapacity.label}
                                fieldType={labels.ramCapacity.fieldType}
                                id={labels.ramCapacity.id}
                                name={labels.ramCapacity.id}
                                value={ramCapacity}
                                options={comboData?.ramCapacities}
                            />

                            <FormField
                                label={labels.driveCapacity.label}
                                fieldType={labels.driveCapacity.fieldType}
                                id={labels.driveCapacity.id}
                                name={labels.driveCapacity.id}
                                value={driveCapacity}
                                options={comboData?.driveCapacities}
                            />

                            <FormField
                                label={labels.driveType.label}
                                fieldType={labels.driveType.fieldType}
                                id={labels.driveType.id}
                                name={labels.driveType.id}
                                value={driveType}
                                options={comboData?.driveTypes}
                            />

                            <FormField
                                label={labels.operatingSystem.label}
                                fieldType={labels.operatingSystem.fieldType}
                                id={labels.operatingSystem.id}
                                name={labels.operatingSystem.id}
                                value={operatingSystem.id}
                                options={comboData?.operatingSystems}
                            />

                            <FormField
                                label={labels.price.label}
                                fieldType={labels.price.fieldType}
                                id={labels.price.id}
                                name={labels.price.id}
                                value={price}
                            />

                            <div className="d-flex flex-column align-items-center">
                                <div>
                                    <ErrorMessage
                                        name="error"
                                        component="p"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        type="submit"
                                        variant="outline-primary"
                                    >
                                        Save
                                    </Button>
                                    <Link
                                        type="button"
                                        to={links.pcs}
                                        className="btn btn-outline-danger mx-2"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};
