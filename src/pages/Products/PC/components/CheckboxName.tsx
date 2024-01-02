import { useState } from "react";
import { useForm } from "react-hook-form";
import { TCheckboxName } from "../../../../types/PC/TCheckboxName";

export const CheckboxName: React.FC<TCheckboxName> = ({
    name,
    control,
    options,
}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const { setValue } = useForm();

    const handleCheckboxChange = (value: string) => {
        const updatedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

        setSelectedValues(updatedValues);
        setValue(name, updatedValues);
    };

    return (
        <>
            {options?.map((option, index) => (
                <div key={index} className="form-check">
                    <input
                        onChange={() => handleCheckboxChange(option)}
                        checked={selectedValues.includes(option)}
                        className="form-check-input"
                        type="checkbox"
                        value={option}
                        id={`${option.replace(" ", "")}-${name}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${option.replace(" ", "")}-${name}`}>
                        {option}
                    </label>
                </div>
            ))}
        </>
    );
};
