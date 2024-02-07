import { links } from "../../config/links";

export const AddNewProductButton = () => {
    return (
        <div className="me-2">
            <a
                className="btn btn-outline-secondary"
                href={links.addNewProduct}
                role="button"
            >
                Add new product
            </a>
        </div>
    );
};
