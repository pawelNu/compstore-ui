import { Field, FieldInputProps, Form, Formik } from "formik";
import { CheckboxIDName } from "./components/CheckboxIDName";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import hostName from "../../../config/config";
import { TPCComboData } from "../../../types/PC/TPCComboData";
import { TPCPageRequest } from "../../../types/PC/TPCPageRequest";
import { TPCFilterProps } from "../../../types/PC/TPCFilter";
import { CheckboxName } from "./components/CheckboxName";
import { FilterPCStyles } from "../../../static/styles/FilterPC";
import { FilterButton } from "../../../layout/components/buttons/FilterButton";

// TODO add clearing filter groups
// TODO add clearing all filters
// TODO add displaying tags with filters

export const FilterPC: React.FC<TPCFilterProps> = ({ setFilter }) => {
    const [comboData, setComboData] = useState<TPCComboData | null>(null);

    const initValues: TPCPageRequest = {
        processorBrands: [],
        graphicsCardBrands: [],
        ramCapacities: [],
        driveCapacities: [],
        driveTypes: [],
        operatingSystems: [],
        priceFrom: undefined,
        priceTo: undefined,
        pagingAndSortingRequest: {
            pageNumber: 0,
            pageSize: 10,
            ascendingFlag: null,
        },
    };

    const onSubmit = async (values: TPCPageRequest) => {
        setFilter(values);
    };

    const getComboData = useCallback(async () => {
        try {
            const result = await axios.get(`${hostName}/pcs/combo-data`);
            const comboData: TPCComboData = result.data;
            setComboData(comboData);
        } catch (e) {
            console.log("Error fetching combo data:", e);
        }
    }, []);

    useEffect(() => {
        getComboData();
    }, [getComboData]);

    return (
        <>
            <div className="card col-2 mt-2" style={FilterPCStyles.card}>
                <Formik
                    initialValues={initValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                    submitForm={null}
                >
                    <Form>
                        <h5 className="card-header">Filters:</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h6 className="card-title">Processor brands</h6>
                                <CheckboxIDName
                                    name="processorBrands"
                                    options={comboData?.processorBrands}
                                />
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-title">
                                    Graphics card brands
                                </h6>
                                <CheckboxIDName
                                    name="graphicsCardBrands"
                                    options={comboData?.graphicsCardBrands}
                                />
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-title">RAM Capacity</h6>
                                <CheckboxName
                                    name="ramCapacities"
                                    options={comboData?.ramCapacities}
                                />
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-title">Drive Capacity</h6>
                                <CheckboxName
                                    name="driveCapacities"
                                    options={comboData?.driveCapacities}
                                />
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-title">Drive Types</h6>
                                <CheckboxName
                                    name="driveTypes"
                                    options={comboData?.driveTypes}
                                />
                            </li>
                            <li className="list-group-item">
                                <h6 className="card-title">
                                    Operating Systems
                                </h6>
                                <CheckboxIDName
                                    name="operatingSystems"
                                    options={comboData?.operatingSystems}
                                />
                            </li>

                            {/* TODO fix console.js:213 Warning: 
A component is changing an uncontrolled input to be controlled. 
This is likely caused by the value changing from undefined to a defined value, 
which should not happen. Decide between using a controlled 
or uncontrolled input element for the lifetime of the component. 
More info: https://reactjs.org/link/controlled-components */}
                            <li className="list-group-item">
                                <h6 className="card-title">Price</h6>
                                <div className="form-floating mb-3">
                                    <Field name="priceFrom">
                                        {({
                                            field,
                                        }: {
                                            field: FieldInputProps<number>;
                                        }) => (
                                            <input
                                                {...field}
                                                id="priceFrom"
                                                type="number"
                                                className="form-control"
                                                placeholder="From"
                                            />
                                        )}
                                    </Field>
                                    <label htmlFor="priceFrom">From</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field name="priceTo">
                                        {({
                                            field,
                                        }: {
                                            field: FieldInputProps<number>;
                                        }) => (
                                            <input
                                                {...field}
                                                id="priceTo"
                                                type="number"
                                                className="form-control"
                                                placeholder="To"
                                            />
                                        )}
                                    </Field>
                                    <label htmlFor="priceTo">To</label>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="d-flex justify-content-center">
                                    <FilterButton />
                                </div>
                            </li>
                        </ul>
                    </Form>
                </Formik>
            </div>
        </>
    );
};
