import React from "react";

type TFilterCard = {
    style: React.CSSProperties;
    children: React.ReactNode;
};

export const FilterCard: React.FC<TFilterCard> = ({ style, children }) => (
    <div className="card col-2 mt-2" style={style}>
        {children}
    </div>
);
