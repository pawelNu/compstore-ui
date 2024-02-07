import { useCallback, useEffect, useState } from "react";
import { getProcessorBrandsComboData } from "./components/actions";
import { TProcessorBrands } from "../../types/ComboData/TProcessorBrands";
import { Link } from "react-router-dom";
import { ActionsButton } from "./components/ActionsButton";

export const ProcessorBrands = () => {
    const [processorBrands, setProcessorBrands] = useState<TProcessorBrands[]>(
        [],
    );

    const getData = useCallback(async () => {
        await getProcessorBrandsComboData(setProcessorBrands);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="container p-3">
            <table className="table table-bordered table-hover table-sm border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Processor name</th>
                        <th scope="col">Device Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {processorBrands.map((processor, index) => (
                        <tr key={processor.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{processor.name}</td>
                            <td>{processor.processorBrandDeviceType}</td>
                            <td>
                                <ActionsButton />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
