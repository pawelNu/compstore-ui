export const AddNewProductForm = () => {
  return (
    <div className="container my-2 px-2">
      <div className="card">
        <h5 className="card-header">Add new product</h5>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label
                htmlFor="inputProductName"
                className="col-sm-2 col-form-label"
              >
                Product name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputProductName"
                  placeholder="Enter Product Name"
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
                Price
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  placeholder="Enter Product Price"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
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
