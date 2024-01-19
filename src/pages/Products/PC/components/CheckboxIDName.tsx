import React from "react";
import { useField, useFormikContext } from "formik";
import { TIDNameType } from "../../../../types/PC/TPC";

type TCheckboxIDNameProps = {
    name: string;
    options?: TIDNameType[] | null;
};

export const CheckboxIDName: React.FC<TCheckboxIDNameProps> = ({
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
                        onChange={() => handleCheckboxChange(option.id)}
                        checked={field.value.includes(option.id)}
                        className="form-check-input"
                        id={`${option.name}-${name}`}
                        type="checkbox"
                        value={option.id}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${option.name}-${name}`}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </>
    );
};
