import React from "react";
import { useField, useFormikContext } from "formik";

type TCheckboxNameProps = {
    name: string;
    options?: string[] | null;
};

export const CheckboxName: React.FC<TCheckboxNameProps> = ({
    name,
    options,
}) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField<string[]>(name);

    const handleCheckboxChange = (value: string) => {
        const updatedValues = field.value.includes(value)
            ? field.value.filter((v: string) => v !== value)
            : [...field.value, value];

        setFieldValue(name, updatedValues);
    };

    return (
        <>
            {options?.map((option, index) => (
                <div key={index} className="form-check">
                    <input
                        onChange={() => handleCheckboxChange(option)}
                        checked={field.value.includes(option)}
                        className="form-check-input"
                        type="checkbox"
                        value={option}
                        id={`${option.replace(" ", "")}-${name}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${option.replace(" ", "")}-${name}`}
                    >
                        {option}
                    </label>
                </div>
            ))}
        </>
    );
};
