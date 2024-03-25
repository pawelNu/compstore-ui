import React from "react";

type TFilterButtonSection = {
    children: React.ReactNode;
};

export const FilterButtonSection: React.FC<TFilterButtonSection> = ({ children }) => (
    <li className="list-group-item">
        <div className="d-flex justify-content-center">{children}</div>
    </li>
);
