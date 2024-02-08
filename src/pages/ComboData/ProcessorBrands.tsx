import { useCallback, useEffect, useState } from "react";
import { getProcessorBrandsComboData } from "./components/actions";
import { TProcessorBrands } from "../../types/ComboData/TProcessorBrands";
import { ActionsButton } from "../../components/buttons/ActionsButton";
import { endpoints, links } from "../../config/links";
import { UUID } from "crypto";
import axios from "axios";

export const ProcessorBrands = () => {
    const [processorBrands, setProcessorBrands] = useState<TProcessorBrands[]>(
        [],
    );

    const getData = useCallback(async () => {
        await getProcessorBrandsComboData(setProcessorBrands);
    }, []);

    const deleteBrand = async (
        id: UUID,
    ): Promise<{ success: boolean; error?: string }> => {
        try {
            await axios.delete(endpoints.processorBrands.byId + id);
            setProcessorBrands((prevPBs) =>
                prevPBs.filter((pb) => pb.id !== id),
            );
            return { success: true };
        } catch (e: any) {
            console.log("file: actions.ts   e:", e);
            return { success: false, error: e.response.data.message };
        }
    };

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="container my-2 px-2">
            <div className="card">
                <h5 className="card-header">Processor Brands</h5>
                <div className="card-body">
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
                            {processorBrands.map((brand, index) => (
                                <tr key={brand.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{brand.name}</td>
                                    <td>{brand.processorBrandDeviceType}</td>
                                    <td>
                                        <ActionsButton
                                            id={brand.id}
                                            // TODO create edit form
                                            editLink={links.processorBrandsEdit}
                                            deleteItem={deleteBrand}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
