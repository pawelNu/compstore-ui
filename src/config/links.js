import hostName from "./config";

export const links = {
    mainPage: "/",
    pcs: "/pcs",
    pcDetails: "/pcs/",
    pcEdit: "/pcs/edit/",
    shoppingCart: "/shopping-cart",
    addNewProduct: "/add-new-product",
    processorBrands: "/processor-brands",
    processorBrandsEdit: "/processor-brands/edit/",
};

export const endpoints = {
    pcs: {
        byId: hostName + "/pcs/",
        addNew: hostName + "/pcs",
        getAll: hostName + "/pcs/search",
        comboData: hostName + "/pcs/combo-data",
    },
    processorBrands: {
        byId: hostName + "/processor-brands/",
        addNew: hostName + "/processor-brands",
        getAll: hostName + "/processor-brands",
        comboData: hostName + "/processor-brands/combo-data",
    },
};
