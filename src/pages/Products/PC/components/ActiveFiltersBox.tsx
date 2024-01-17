// ActiveFiltersBox.tsx
import React from "react";
import { ActiveFilterLabel } from "./ActiveFilterLabel";

type ActiveFiltersBoxProps = {
    activeFilters: string[];
    onRemoveFilter: (filterName: string) => void;
};

export const ActiveFiltersBox: React.FC<ActiveFiltersBoxProps> = ({
    activeFilters,
    onRemoveFilter,
}) => {
    console.log("ActiveFiltersBox.tsx activeFilters:", activeFilters);
    return (
        <div className="active-filters-box">
            {activeFilters.map((filter, index) => (
                <ActiveFilterLabel
                    key={index}
                    label={filter}
                    onRemoveFilter={() => onRemoveFilter(filter)}
                />
            ))}
        </div>
    );
};
