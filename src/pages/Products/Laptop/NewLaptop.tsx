import { links } from "../../../config/links";

export const NewLaptop: React.FC = () => {
    return (
        <>
            <form>
                <div className="row mb-3">
                    <label
                        htmlFor="processorBrand"
                        className="col-sm-2 col-form-label"
                    >
                        Laptop
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="processorBrand"
                            placeholder="test"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="processorName"
                        className="col-sm-2 col-form-label"
                    >
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="processorName"
                            placeholder="test"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-primary">
                        Add product
                    </button>
                    <a
                        href={links.mainPage}
                        className="btn btn-outline-danger mx-2"
                    >
                        Cancel
                    </a>
                </div>
            </form>
        </>
    );
};
