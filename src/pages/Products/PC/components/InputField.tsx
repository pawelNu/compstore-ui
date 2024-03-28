import React from "react";
import { Field, FieldInputProps, useField } from "formik";

interface CustomInputProps {
    label: string;
    id: string;
    name: string;
    type?: string;
}

export const InputField: React.FC<CustomInputProps> = ({ label, id, name, type = "text" }) => {
    const [, meta] = useField(name);

    return (
        <div className="form-floating mb-3">
            <Field name={name}>
                {({ field }: { field: FieldInputProps<number> }) => (
                    <>
                        <input
                            {...field}
                            id={id}
                            type={type}
                            className={`form-control ${meta.touched && meta.error ? "is-invalid" : ""}`}
                            placeholder={label}
                        />
                        <label htmlFor={id}>{label}</label>
                        {meta.touched && meta.error ? <div className="invalid-feedback">{meta.error}</div> : null}
                    </>
                )}
            </Field>
        </div>
    );
};
