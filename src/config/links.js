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
    processorBrandsNew: "/processor-brands/new",
};

export const links2 = {
    mainPage: "/",
    shoppingCart: "shopping-cart",
    pcs: "pcs",
    processorBrands: "processor-brands",
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
    products: {
        getAll: hostName + "/products",
    },
    orders: {
        addNew: hostName + "/orders",
        byId: hostName + "/orders/",
    },
};
