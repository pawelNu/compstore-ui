import axios from "axios";
import { TProcessorBrands } from "../../../types/ComboData/TProcessorBrands";
import { Dispatch, SetStateAction } from "react";
import { endpoints } from "../../../config/links";

export const getProcessorBrandsComboData = async (
    setProcessorBrands: Dispatch<SetStateAction<TProcessorBrands[]>>,
) => {
    try {
        const result = await axios.get(endpoints.processorBrands.getAll);
        setProcessorBrands(result.data);
    } catch (error: any) {
        console.log("file: actions.ts   error:", error);
    }
};
