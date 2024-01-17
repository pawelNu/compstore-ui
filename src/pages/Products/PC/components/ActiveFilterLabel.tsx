import React from "react";

type TActiveFilterLabelProps = {
    label: string;
    onRemoveFilter: () => void;
};

export const ActiveFilterLabel: React.FC<TActiveFilterLabelProps> = ({
    label,
    onRemoveFilter,
}) => {
    return (
        <div className="active-filter-label">
            <span>{label}</span>
            <button onClick={onRemoveFilter}>x</button>
        </div>
    );
};
