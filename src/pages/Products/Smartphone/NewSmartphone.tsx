export const NewSmartphone: React.FC = () => {
    return (
        <>
            <div className="row mb-3">
                <label
                    htmlFor="processorBrand"
                    className="col-sm-2 col-form-label"
                >
                    Smartphone
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
        </>
    );
};
