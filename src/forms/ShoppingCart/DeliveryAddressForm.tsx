export const DeliveryAddressForm = () => {
    return (
        <form>
            <div className="row mb-3">
                <label
                    htmlFor="inputFirstName"
                    className="col-sm-2 col-form-label"
                >
                    First Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="inputLastName"
                    className="col-sm-2 col-form-label"
                >
                    Last Name
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                >
                    Email
                </label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputCity" className="col-sm-2 col-form-label">
                    City
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label
                    htmlFor="inputZipCode"
                    className="col-sm-2 col-form-label"
                >
                    ZipCode
                </label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputZipCode"
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary">
                    Buy and pay
                </button>
            </div>
        </form>
    );
};
