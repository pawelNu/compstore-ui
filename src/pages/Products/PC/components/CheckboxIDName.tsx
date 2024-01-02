import { useState } from "react";
import { useForm } from "react-hook-form";
import { TCheckboxIDName } from "../../../../types/PC/TCheckboxIDName";

export const CheckboxIDName: React.FC<TCheckboxIDName> = ({
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
                        onChange={() => handleCheckboxChange(option.id)}
                        checked={selectedValues.includes(option.id)}
                        className="form-check-input"
                        type="checkbox"
                        value={option.id}
                        id={`${option.name}-${name}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${option.name}-${name}`}>
                        {option.name}
                    </label>
                </div>
            ))}
        </>
    );
};
