import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import { TIDNameType } from "../../types/PC/TPC";
import { UUID } from "crypto";

type TFormFieldProps = {
    label: string;
    fieldType: string;
    id: string;
    name: string;
    value: string | number | UUID;
    options?: TIDNameType[] | string[];
};

export const FormField: React.FC<TFormFieldProps> = ({
    label,
    fieldType,
    id,
    name,
    value,
    options,
}) => {
    const { values, setFieldValue } = useFormikContext<{
        [key: string]: string | number | UUID;
    }>();
    value = values[name];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setFieldValue(name, e.target.value);
    };

    return (
        <div className="row mb-3">
            <label htmlFor={id} className="col-sm-2 col-form-label">
                {label}
            </label>
            <div className="col-sm-10">
                {fieldType === "select" ? (
                    <Field
                        as="select"
                        className="form-select col-sm-10"
                        id={id}
                        name={name}
                        value={value}
                        onChange={handleInputChange}
                    >
                        <option value="">{`Choose ${label}`}</option>
                        {options?.map((data, index) => (
                            <option
                                key={index}
                                value={
                                    typeof data === "string" ? data : data.id
                                }
                            >
                                {typeof data === "string" ? data : data.name}
                            </option>
                        ))}
                    </Field>
                ) : (
                    <Field
                        type={fieldType}
                        className="form-control"
                        id={id}
                        name={name}
                        value={value}
                        onChange={handleInputChange}
                    />
                )}
                <ErrorMessage
                    name={name}
                    component="div"
                    className="text-danger"
                />
            </div>
        </div>
    );
};
