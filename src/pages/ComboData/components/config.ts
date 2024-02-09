import { TButtons } from "../../../components/buttons/ButtonWithIcon";
import { PlusIcon } from "../../../components/icons/plusIcon";
import { links } from "../../../config/links";

type AllButtons = {
    addNewProcessorBrand: TButtons;
}

export const buttons: AllButtons = {
    addNewProcessorBrand: {
        title: "Add new processor brand",
        variant: "primary",
        divClassName: "mb-3",
        link: links.processorBrandsNew,
        icon: PlusIcon(),
    },
}