import React from "react";

type TFilterGroup = {
    title: string;
    children: React.ReactNode;
};

export const FilterGroup: React.FC<TFilterGroup> = ({ title, children }) => {
    return (
        <>
            <h5 className="card-header">{title}</h5>
            <ul className="list-group list-group-flush">{children}</ul>
        </>
    );
};
