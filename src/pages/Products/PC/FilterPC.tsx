import { useNavigate } from "react-router-dom";
import { FilterButton } from "../../../layout/components/buttons/FilterButton";
import axios from "axios";
import hostName from "../../../config/config";
import { useEffect, useState } from "react";
import { TPCSimple } from "../../../types/TPCSimple";
import { TPCComboData } from "../../../types/TPCComboData";

export const FilterPC = () => {
    const [pcs, setPCs] = useState<TPCSimple[]>([]);
    const [comboData, setComboData] = useState<TPCComboData>();

    const rams = [8, 16, 32, 64];
    const driveCapacities = [256, 512, 1024, 2048];
    const driveTypes = ["SSD", "HDD"];
    const price = ["From", "To"];

    let navigate = useNavigate();

    const getPCs = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Filter button clicked");
        const url = `${hostName}/pcs/search`;
        // TODO add checking if filter is empty
        // TODO connect post request from filter with PC
        const emptyJson = {};
        try {
            const result = await axios.post(url, emptyJson);
            setPCs(result.data.pcs);
        } catch (error: any) {
            console.log("file: CategoryBar.tsx  handleClick  error:", error);
        }
    };

    const getComboData = async () => {
        try {
            const result = await axios.get(`${hostName}/pcs/combo-data`);
            setComboData(result.data);
        } catch (e) {
            console.log("file: NewPC.tsx  getComboData  e:", e);
            console.error("Error getting combo data: ", e);
            console.log("file: NewPC.tsx  getComboData  error");
        }
    };

    const onInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setPCs({ ...pcs, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getComboData();
    }, []);

    return (
        <div className="card col-2 mt-2">
            <form onSubmit={(e) => getPCs(e)}>
                <h5 className="card-header">Filters:</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h6 className="card-title">Processor brands</h6>
                        {comboData?.processorBrands.map((cpu, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={cpu.id}
                                    id={`${cpu.name}Cpu`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${cpu.name}Cpu`}
                                >
                                    {cpu.name}
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Graphics card brands</h6>
                        {comboData?.graphicsCardBrands.map((gpu, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={gpu.id}
                                    id={`${gpu.name}Gpu`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${gpu.name}Gpu`}
                                >
                                    {gpu.name}
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">RAM Capacity</h6>
                        {/* TODO add to combo-data */}
                        {rams.map((ram, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`${ram}RAM`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${ram}RAM`}
                                >
                                    {ram} GB
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Drive Capacity</h6>
                        {/* TODO add to combo-data */}
                        {driveCapacities.map((drive, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={`${drive}Drive`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${drive}Drive`}
                                >
                                    {drive} GB
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Drive Types</h6>
                        {comboData?.driveTypes.map((drive, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={drive}
                                    id={`${drive}Drive`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${drive}Drive`}
                                >
                                    {drive}
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Operating Systems</h6>
                        {comboData?.operatingSystems.map((system, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={system.id}
                                    id={`${system.name}System`}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={`${system.name}System`}
                                >
                                    {system.name}
                                </label>
                            </div>
                        ))}
                    </li>
                    <li className="list-group-item">
                        <h6 className="card-title">Price</h6>
                        {price.map((range, index) => (
                            <div key={index} className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    id={`price${range}`}
                                    // TODO value from value disappears
                                    // TODO fix it
                                    value={`price${range}`}
                                    onChange={onInputChange}
                                    placeholder={range}
                                />
                                <label htmlFor={`price${range}`}>{range}</label>
                            </div>
                        ))}
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
