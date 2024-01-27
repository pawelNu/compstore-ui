import React from "react";
import { Field, ErrorMessage } from "formik";

type TFormFieldProps = {
    label: string;
    fieldType: string;
    id: string;
    name: string;
    value: string | number;
    options?: Array<{ id: string; name: string }> | string[];
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
};

export const FormField: React.FC<TFormFieldProps> = ({
    label,
    fieldType,
    id,
    name,
    value,
    options,
    onChange,
}) => {
    return (
        <div className="row mb-3">
            <label htmlFor={id} className="col-sm-2 col-form-label">
                {label}
            </label>
            <div className="col-sm-10">
                {fieldType === "select" && Array.isArray(options) ? (
                    <Field
                        as="select"
                        className="form-select col-sm-10"
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                    >
                        <option value="">{`Choose ${label}`}</option>
                        {options.map((data, index) => (
                            <option
                                key={index}
                                value={
                                    typeof data === "object" ? data.id : data
                                }
                            >
                                {typeof data === "object" ? data.name : data}
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
                        onChange={onChange}
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
