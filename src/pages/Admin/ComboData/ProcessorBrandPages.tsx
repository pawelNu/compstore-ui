import { Routes, Route } from "react-router-dom";
import { links } from "../../../config/links";
import { AddNewProductForm } from "../../Products/AddNewProductForm";
import { ProcessorBrandNew } from "./ProcessorBrandNew";
import { ProcessorBrands } from "./ProcessorBrands";
import { ProcessorBrandsEdit } from "./ProcessorBrandsEdit";

export const ProcessorBrandPages = () => {
    return (
        <Routes>
            <Route path={links.addNewProduct} element={<AddNewProductForm />} />
            <Route path={links.processorBrands} element={<ProcessorBrands />} />
            <Route
                path={`${links.processorBrandsEdit}:id`}
                element={<ProcessorBrandsEdit />}
            />
            <Route
                path={links.processorBrandsNew}
                element={<ProcessorBrandNew />}
            />
        </Routes>
    );
};
