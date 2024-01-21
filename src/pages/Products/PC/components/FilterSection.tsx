import React from "react";

type TFilterSection = {
    title: string;
    children: React.ReactNode;
};

export const FilterSection: React.FC<TFilterSection> = ({
    title,
    children,
}) => (
    <li className="list-group-item">
        <h6 className="card-title">{title}</h6>
        {children}
    </li>
);
