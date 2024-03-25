import { useEffect, useState } from "react";
import "../../../static/styles/OneProductDetails.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TPCDetails } from "../../../types/PC/TPC";
import { initialPCDetails } from "./components/initialValues";
import { endpoints } from "../../../config/links.js";
import { ProductDetailsComponent, TDetailsMap } from "../../../components/product/ProductDetailsComponent";

export const PCDetails = () => {
    const imagePlaceholder =
        "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

    const [pc, setPc] = useState<TPCDetails>(initialPCDetails);

    const { id } = useParams();

    // TODO dodać loading spinner
    const getPc = async (id: string | undefined) => {
        try {
            const result = await axios.get(endpoints.pcs.byId + id);
            setPc(result.data);
        } catch (e) {
            console.log("Error getting pc -> file: PCDetails.tsx  getPc  e:", e);
        }
    };

    const pcDetailsMap: TDetailsMap = {
        Processor: pc.processorName,
        GPU: pc.graphicsCardName,
        RAM: pc.ramCapacity,
        "Storage drive": `${pc.driveType} ${pc.driveCapacity}`,
        "Operating system": pc.operatingSystem.name,
    };

    useEffect(() => {
        getPc(id);
    }, [id]);

    return <ProductDetailsComponent data={pc} imagePlaceholder={imagePlaceholder} productDetailsMap={pcDetailsMap} />;
};
