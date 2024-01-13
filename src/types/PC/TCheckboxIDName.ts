import { Control } from "react-hook-form";
import { TPCPageRequest } from "./TPCPageRequest";
import { TIDNameType } from "./TPCComboData";

export type TCheckboxIDName = {
    name: string;
    control: Control<TPCPageRequest>;
    options?: TIDNameType[] | null;
};
