import { useCallback, useEffect, useState } from "react";
import { getProcessorBrandsComboData } from "./components/actions";
import { TProcessorBrands } from "../../types/ComboData/TProcessorBrands";
import { ActionsButton } from "../../components/buttons/ActionsButton";
import { endpoints, links } from "../../config/links";
import { UUID } from "crypto";
import axios from "axios";
import { Card, Table } from "react-bootstrap";
import { ButtonWithIcon } from "../../components/buttons/ButtonWithIcon";
import { buttons } from "../../config/buttonsConfig";

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
            <Card>
                <Card.Header as="h5">Processor Brands</Card.Header>
                <Card.Body>
                    <ButtonWithIcon config={buttons.addNewProcessorBrand} />
                    <Table bordered hover responsive="sm">
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
                                            editLink={links.processorBrandsEdit}
                                            deleteItem={deleteBrand}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};
