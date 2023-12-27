import { FilterButton } from "../../../layout/components/buttons/FilterButton";

export const FilterPC = () => {
    const cpus = ["Intel", "AMD"];
    const gpus = ["Intel", "AMD", "NVIDIA"];
    const rams = [8, 16, 32, 64];
    const driveCapacities = [256, 512, 1024, 2048];
    const driveTypes = ["SSD", "HDD"];
    const systems = ["Windows", "Linux"];
    const price = ["From", "To"];

    return (
        <div className="card col-2 mt-2">
            <h5 className="card-header">Filters:</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <h6 className="card-title">Processor brands</h6>
                    {cpus.map((cpu, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`${cpu}Cpu`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${cpu}Cpu`}>
                                {cpu}
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">Graphics card brands</h6>
                    {gpus.map((gpu, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`${gpu}Gpu`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${gpu}Gpu`}>
                                {gpu}
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">RAM Capacity</h6>
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
                                htmlFor={`${ram}RAM`}>
                                {ram} GB
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">Drive Capacity</h6>
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
                                htmlFor={`${drive}Drive`}>
                                {drive} GB
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">Drive Types</h6>
                    {driveTypes.map((drive, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`${drive}Drive`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${drive}Drive`}>
                                {drive}
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">Operating Systems</h6>
                    {systems.map((system, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`${system}System`}
                            />
                            <label
                                className="form-check-label"
                                htmlFor={`${system}System`}>
                                {system}
                            </label>
                        </div>
                    ))}
                </li>
                <li className="list-group-item">
                    <h6 className="card-title">Price</h6>
                    {price.map((range, index) => (
                        <div key={index} className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id={`price${range}`}
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
        </div>
    );
};
