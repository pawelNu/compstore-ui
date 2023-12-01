import { NewProduct } from "../../../types/NewProduct";
import { labelNames } from "./NewPCLabels";

export const NewPC: React.FC = () => {
    const labels: NewProduct[] = labelNames;

    return (
        <>
            {labels.map((data, index) => (
                <div key={index} className="row mb-3">
                    <label
                        htmlFor={data.htmlFor}
                        className="col-sm-2 col-form-label"
                    >
                        {data.labelName}
                    </label>
                    <div className="col-sm-10">
                        <input
                            type={data.type}
                            className="form-control"
                            id={data.htmlFor}
                            placeholder={data.placeholder}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};
