import React from "react";
import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";

type ProductDetailsProps = {
    header?: string;
    detailsMap: { [key: string]: string | number };
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({
    header,
    detailsMap,
}) => {
    const cardContent = (
        <>
            {header && <CardHeader as={"h5"}>{header}</CardHeader>}
            <CardBody>
                {Object.entries(detailsMap).map(([label, value], index) => (
                    <CardText key={index}>
                        <b>{label}: </b>
                        {value}
                    </CardText>
                ))}
            </CardBody>
        </>
    );

    return <>{header ? <Card>{cardContent}</Card> : cardContent}</>;
};
