import { productPCs } from "../../../data/PCsData";
import "./../../../static/styles/Products.css";
import { AddToCartButton } from "../../../layout/components/buttons/AddToCartButton";
import { FilterPC } from "./FilterPC";

export const PCs = () => {
  const imagePlaceholder =
    "https://github.com/pawelNu/compstore-ui/assets/93542936/8196ca80-ef1b-4b67-a7bd-b56c7b7f23e3";

  return (
    <div className="container d-flex justify-content-between p-2 mb-2">
      <FilterPC />
      <div className="container col-10 p-2 mb-2">
        {productPCs.pcs.map((data) => (
          <div key={data.id} className="mb-2">
            <div className="card">
              <a className="products-header-link" href={"pc/" + data.id}>
                <h5 className="card-header">
                  PC - {data.processorName} - {data.graphicsCardName} -{" "}
                  {data.ramGBCapacity} GB RAM
                </h5>
              </a>
              <div className="row g-0">
                <div className="col-3">
                  <a href={"pc/" + data.id}>
                    <img
                      src={imagePlaceholder}
                      className="img-fluid rounded-start products-product-image"
                      alt="Product"
                    />
                  </a>
                </div>
                <div className="col-6">
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
                <div className="col-3">
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
