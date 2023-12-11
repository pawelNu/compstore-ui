import { productPCs } from "../../../data/PCsData";
import "./../../../static/styles/Products.css";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";

export const PCs = () => {
  const imagePlaceholder =
    "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

  return (
    <div className="d-flex justify-content-between p-2 mb-2">
      <div>
        <h5 className="card-header">Filters:</h5>
        <ul className="list-group">
          <li className="list-group-item">
            Processor brands
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="intelCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Intel
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="amdCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                AMD
              </label>
            </div>
          </li>
          <li className="list-group-item">
            Graphics card brands
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="intelCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                NVIDIA
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="amdCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                AMD
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="amdCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Intel
              </label>
            </div>
          </li>
          <li className="list-group-item">
            RAM Capacity
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">To</label>
            </div>
          </li>
          <li className="list-group-item">
            Drive Capacity
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">To</label>
            </div>
          </li>
          <li className="list-group-item">
            Drive Types
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="intelCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                SSD
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="amdCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                HDD
              </label>
            </div>
          </li>
          <li className="list-group-item">
            Operating Systems
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="intelCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Windows
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="amdCheck"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Linux
              </label>
            </div>
          </li>
          <li className="list-group-item">
            Price
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">To</label>
            </div>
          </li>
        </ul>
      </div>
      <div className="container p-2 mb-2">
        {productPCs.pcs.map((data) => (
          <div key={data.id} className="col-sm-8 mb-2">
            <div className="card">
              <a className="products-header-link" href={"pc/" + data.id}>
                <h5 className="card-header">
                  PC - {data.processorName} - {data.graphicsCardName} -{" "}
                  {data.ramGBCapacity} GB RAM
                </h5>
              </a>
              <div className="row g-0">
                <div className="col-md-3">
                  <a href={"pc/" + data.id}>
                    <img
                      src={imagePlaceholder}
                      className="img-fluid rounded-start products-product-image"
                      alt="Product"
                    />
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-text">
                      <b>Processor: </b>
                      {data.processorName}
                    </p>
                    <p className="card-text">
                      <b>GPU: </b>
                      {data.graphicsCardName}
                    </p>
                    <p className="card-text">
                      <b>RAM: </b>
                      {data.ramGBCapacity} GB
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="products-price-tag">
                    <div className="card-body">
                      <div>$ {data.price}</div>
                    </div>
                    <AddToCartButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
