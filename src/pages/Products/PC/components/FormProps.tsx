import { TPCNewOrUpdated } from "../../../../types/PC/TPC";
import * as Yup from "yup";

export const initialValues: TPCNewOrUpdated = {
    processorBrand: "",
    processorName: "",
    graphicsCardBrand: "",
    graphicsCardName: "",
    ramCapacity: "",
    driveCapacity: "",
    driveType: "",
    operatingSystem: "",
    price: 0,
};

export const validationSchema = Yup.object().shape({
    processorBrand: Yup.string().required("Processor brand is required"),
    processorName: Yup.string().required("Processor name is required"),
    graphicsCardBrand: Yup.string().required("Graphic card brand is required"),
    graphicsCardName: Yup.string().required("Graphic card name is required"),
    ramCapacity: Yup.string().required("Ram capacity is required"),
    driveCapacity: Yup.string().required("Drive capacity is required"),
    driveType: Yup.string().required("Drive type is required"),
    operatingSystem: Yup.string().required("Operating system is required"),
    price: Yup.number()
        .typeError("Price must be a number")
        .required("Price is required")
        .positive("Price must be positive")
        .max(999999.99, "Price must be less than 999 999.99")
        .test("is-decimal", "Price must have no more than two decimal places", (value) => {
            const regex = /^\d+(\.\d{1,2})?$/;
            return regex.test(value ? value.toString() : "");
        }),
});
