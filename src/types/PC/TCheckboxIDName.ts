import { Control } from "react-hook-form";
import { TPCPageRequest } from "./TPCPageRequest";

export type TCheckboxIDName = {
    name: string;
    control: Control<TPCPageRequest>;
    options?: { id: string; name: string }[] | undefined;
};
