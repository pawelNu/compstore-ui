import { Control, UseFormReturn } from "react-hook-form";
import { TPCPageRequest } from "./TPCPageRequest";

export type TCheckboxName = {
    name: string;
    control: Control<TPCPageRequest>;
    options?: string[] | null;
};

export type TCheckboxNameProps = {
    control: UseFormReturn["control"];
} & TCheckboxName;
