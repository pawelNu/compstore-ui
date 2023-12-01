import { useState } from "react";
import { NewPC } from "./PC/NewPC";
import { NewLaptop } from "./Laptop/NewLaptop";
import { NewSmartphone } from "./Smartphone/NewSmartphone";
import { NewTV } from "./TV/NewTV";

export const AddNewProductForm = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("tv");

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const renderForm = () => {
        switch (selectedCategory) {
            case "pc":
                return <NewPC />;
            case "laptop":
                return <NewLaptop />;
            case "smartphone":
                return <NewSmartphone />;
            case "tv":
                return <NewTV />;
            default:
                return null;
        }
    };

    return (
        <div className="container my-2 px-2">
            <div className="card">
                <h5 className="card-header">Add new product</h5>
                <div className="card-body">
                    <div className="row mb-3">
                        <label
                            htmlFor="productCategory"
                            className="col-sm-2 col-form-label"
                        >
                            Choose product category:
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select col-sm-10"
                                name="productCategory"
                                value={selectedCategory}
                                onChange={changeCategory}
                            >
                                <option value="pc">PC</option>
                                <option value="laptop">Laptop</option>
                                <option value="smartphone">Smartphone</option>
                                <option value="tv">TV</option>
                            </select>
                        </div>
                    </div>
                    <form>
                        {renderForm()}
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                            >
                                Add product
                            </button>
                            <a href="/" className="btn btn-outline-danger mx-2">
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
