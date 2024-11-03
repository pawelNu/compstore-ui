import React from "react";
import { Card, CardBody, CardHeader, CardText } from "react-bootstrap";
import { MappedProperty } from "./SimpleProductCardList";

type ProductDetailsProps = {
    header?: string;
    detailsMap: { [key: string]: string | number };
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({ header, detailsMap }) => {
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

type ProductDetailsProps2 = {
    header?: string;
    itemDetailsList: MappedProperty[];
};

export const ProductDetails2: React.FC<ProductDetailsProps2> = ({ header, itemDetailsList: array }) => {
    const cardContent = (
        <>
            {header && <CardHeader as={"h5"}>{header}</CardHeader>}
            <CardBody>
                {array.map((item, index) =>
                    item.param !== "id" && item.param !== "Price" ? (
                        <CardText key={index}>
                            <b>{item.param}: </b>
                            {item.value}
                        </CardText>
                    ) : null,
                )}
            </CardBody>
        </>
    );

    return <>{header ? <Card>{cardContent}</Card> : cardContent}</>;
};
