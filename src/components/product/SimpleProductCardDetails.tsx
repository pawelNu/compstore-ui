import React from "react";

interface PCItemProps {
    id: string;
    processorName: string;
    graphicsCardName: string;
    ramCapacity: string;
    price: number;
}

export const SimpleProductCardDetails: React.FC<PCItemProps> = ({
    processorName,
    graphicsCardName,
    ramCapacity,
    price,
}) => {
    return (
        <div>
            <h3>{processorName}</h3>
            <p>Graphics: {graphicsCardName}</p>
            <p>RAM: {ramCapacity}</p>
            <p>Price: {price} USD</p>
        </div>
    );
};
