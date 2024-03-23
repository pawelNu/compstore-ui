import { links } from "../../config/links";

export const sidebarElements = [
    {
        header: "Products",
        subMenu: [
            {
                name: "Add new product",
                link: links.addNewProduct,
            },
        ],
    },
    {
        header: "Processor Brands",
        subMenu: [
            {
                name: "Show processor brands",
                link: links.processorBrands,
            },
        ],
    },
];
