import { useState } from "react";
import { NewLaptop } from "./Laptop/NewLaptop";
import { PCNew } from "./PC/PCNew";
import { NewSmartphone } from "./Smartphone/NewSmartphone";
import { NewTV } from "./TV/NewTV";

export const AddNewProductForm = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>();

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const renderProductForm = () => {
        switch (selectedCategory) {
            case "pc":
                return <PCNew />;
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
                        <label htmlFor="productCategory" className="col-sm-2 col-form-label">
                            Choose product category:
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select col-sm-10"
                                id="productCategory"
                                name="productCategory"
                                value={selectedCategory}
                                onChange={changeCategory}>
                                <option value="">Choose product category</option>
                                <option value="pc">PC</option>
                                <option value="laptop">Laptop</option>
                                <option value="smartphone">Smartphone</option>
                                <option value="tv">TV</option>
                            </select>
                        </div>
                    </div>
                    {renderProductForm()}
                </div>
            </div>
        </div>
    );
};
