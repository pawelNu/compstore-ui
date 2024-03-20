import { Form, Formik } from "formik";
import { CheckboxIDName } from "./components/CheckboxIDName";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { CheckboxName } from "./components/CheckboxName";
import { filterPCStyles } from "../../../static/styles/FilterPC";
import { InputField } from "./components/InputField";
import { FilterSection } from "./components/FilterSection";
import { FilterButtonSection } from "./components/FilterButtonSection";
import { FilterGroup } from "./components/FilterGroup";
import { FilterCard } from "./components/FilterCard";
import { TPCComboData, TPCPageRequest } from "../../../types/PC/TPC";
import { Button } from "react-bootstrap";
import { initialValuesFilter } from "./components/initialValues";
import { endpoints, links } from "../../../config/links";
import { ButtonWithIcon } from "../../../components/buttons/ButtonWithIcon";
import { buttons } from "../../../components/buttons/buttonsConfig";

type TPCFilterProps = {
    setFilter: (filterValues: any) => void;
};

export const PCFilter: React.FC<TPCFilterProps> = ({ setFilter }) => {
    const [comboData, setComboData] = useState<TPCComboData | null>(null);

    const initValues: TPCPageRequest = initialValuesFilter;

    const onSubmit = async (values: TPCPageRequest) => {
        setFilter(values);
    };

    const getComboData = useCallback(async () => {
        try {
            const result = await axios.get(endpoints.pcs.comboData);
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
            <FilterCard style={filterPCStyles.card}>
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
                                <ButtonWithIcon config={buttons.filterPC} />
                            </FilterButtonSection>
                            <FilterButtonSection>
                                <Button
                                    href={links.pcs}
                                    variant="outline-danger"
                                >
                                    Clear filters
                                </Button>
                            </FilterButtonSection>
                        </FilterGroup>
                    </Form>
                </Formik>
            </FilterCard>
        </>
    );
};
