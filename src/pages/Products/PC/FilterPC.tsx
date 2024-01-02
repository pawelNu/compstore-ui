import { FilterButton } from "../../../layout/components/buttons/FilterButton";
import axios from "axios";
import hostName from "../../../config/config";
import { useEffect, useState } from "react";
import { TPCComboData } from "../../../types/PC/TPCComboData";
import { TPCPageRequest } from "../../../types/PC/TPCPageRequest";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { CheckboxIDName } from "./components/CheckboxIDName";
import { CheckboxName } from "./components/CheckboxName";

export const FilterPC = () => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<TPCPageRequest>();

    const [comboData, setComboData] = useState<TPCComboData | null>(null);

    const onSubmit = async (data: TPCPageRequest) => {
        const url = `${hostName}/pcs/search`;

        try {
            const result = await axios.post(url, data);
            // Ustaw wyniki w stanie komponentu lub przekieruj do innej ścieżki
            console.log(result.data.pcs);
        } catch (error: any) {
            console.log("Error:", error);
        }
    };

    // TODO The 'getComboData' function makes the dependencies 
    // of useEffect Hook (at line 65) change on every render. 
    // Move it inside the useEffect callback. Alternatively, 
    // wrap the definition of 'getComboData' in its own useCallback() Hook.
    const getComboData = async () => {
        try {
            const result = await axios.get(`${hostName}/pcs/combo-data`);
            const comboData: TPCComboData = result.data;

            // Ustaw dane początkowe za pomocą setValue
            setValue(
                "processorBrands",
                comboData.processorBrands.map((brand) => brand.id),
            );
            setValue(
                "graphicsCardBrands",
                comboData.graphicsCardBrands.map((brand) => brand.id),
            );
            setValue("ramCapacities", comboData.ramCapacities);
            setValue("driveCapacities", comboData.driveCapacities);
            setValue("driveTypes", comboData.driveTypes);
            setValue(
                "operatingSystems",
                comboData.operatingSystems.map((system) => system.id),
            );
            // Ustaw inne dane podobnie
            setComboData(comboData);
        } catch (e) {
            console.log("Error fetching combo data:", e);
        }
    };

    useEffect(() => {
        getComboData();
    }, [getComboData, setValue]);

    return (
        <div className="card col-2 mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="card-header">Filters:</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h6 className="card-title">Processor brands</h6>
                        <CheckboxIDName
                            name="processorBrands"
                            control={control}
                            options={comboData?.processorBrands}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Graphics card brands</h6>
                        <CheckboxIDName
                            name="graphicsCardBrands"
                            control={control}
                            options={comboData?.graphicsCardBrands}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">RAM Capacity</h6>
                        <CheckboxName
                            name="ramCapacities"
                            control={control}
                            options={comboData?.ramCapacities}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Drive Capacity</h6>
                        <CheckboxName
                            name="driveCapacities"
                            control={control}
                            options={comboData?.driveCapacities}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Drive Types</h6>
                        <CheckboxName
                            name="driveTypes"
                            control={control}
                            options={comboData?.driveTypes}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Operating Systems</h6>
                        <CheckboxIDName
                            name="operatingSystems"
                            control={control}
                            options={comboData?.operatingSystems}
                        />
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Price</h6>
                        <div className="form-floating mb-3">
                            <Controller
                                name="priceFrom"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="priceFrom"
                                        type="number"
                                        className="form-control"
                                        placeholder="From"
                                    />
                                )}
                            />
                            <label htmlFor="priceFrom">From</label>
                        </div>
                        <div className="form-floating mb-3">
                            <Controller
                                name="priceTo"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        id="priceTo"
                                        type="number"
                                        className="form-control"
                                        placeholder="To"
                                    />
                                )}
                            />
                            <label htmlFor="priceTo">To</label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="d-flex justify-content-center">
                            <FilterButton />
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
};
