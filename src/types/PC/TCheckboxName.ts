import { Control } from "react-hook-form";
import { TPCPageRequest } from "./TPCPageRequest";

export type TCheckboxName = {
    name: string;
    control: Control<TPCPageRequest>;
    options?: string[] | undefined;
};
