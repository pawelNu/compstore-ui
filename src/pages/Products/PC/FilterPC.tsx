import { Form, Formik } from "formik";
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
import { InputField } from "./components/InputField";
import { FilterSection } from "./components/FilterSection";
import { FilterButtonSection } from "./components/FilterButtonSection";
import { FilterGroup } from "./components/FilterGroup";
import { FilterCard } from "./components/FilterCard";

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
        priceFrom: "",
        priceTo: "",
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
            <FilterCard style={FilterPCStyles.card}>
                <Formik initialValues={initValues} onSubmit={onSubmit}>
                    <Form>
                        <FilterGroup title="Filters:">
                            <FilterSection title="Processor brands">
                                <CheckboxIDName
                                    name="processorBrands"
                                    options={comboData?.processorBrands}
                                />
                            </FilterSection>

                            <FilterSection title="Graphics card brands">
                                <CheckboxIDName
                                    name="graphicsCardBrands"
                                    options={comboData?.graphicsCardBrands}
                                />
                            </FilterSection>

                            <FilterSection title="RAM Capacity">
                                <CheckboxName
                                    name="ramCapacities"
                                    options={comboData?.ramCapacities}
                                />
                            </FilterSection>

                            <FilterSection title="Drive Capacity">
                                <CheckboxName
                                    name="driveCapacities"
                                    options={comboData?.driveCapacities}
                                />
                            </FilterSection>

                            <FilterSection title="Drive Types">
                                <CheckboxName
                                    name="driveTypes"
                                    options={comboData?.driveTypes}
                                />
                            </FilterSection>

                            <FilterSection title="Operating Systems">
                                <CheckboxIDName
                                    name="operatingSystems"
                                    options={comboData?.operatingSystems}
                                />
                            </FilterSection>

                            <FilterSection title="Price">
                                <InputField
                                    label="From"
                                    id="priceFrom"
                                    name="priceFrom"
                                    type="number"
                                />
                                <InputField
                                    label="To"
                                    id="priceTo"
                                    name="priceTo"
                                    type="number"
                                />
                            </FilterSection>

                            <FilterButtonSection>
                                <FilterButton />
                            </FilterButtonSection>
                        </FilterGroup>
                    </Form>
                </Formik>
            </FilterCard>
        </>
    );
};
