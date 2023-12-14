export const FilterPC = () => {
  return (
    <div className="card col-2 mt-2">
      <h5 className="card-header">Filters:</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h6 className="card-title">Processor brands</h6>
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
          <h6 className="card-title">Graphics card brands</h6>
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
          <h6 className="card-title">RAM Capacity</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="intelCheck"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              8 GB
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
              16 GB
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
              32 GB
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
              64 GB
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <h6 className="card-title">Drive Capacity</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="intelCheck"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              256 GB
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
              512 GB
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
              1024 GB
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
              2048 GB
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
              4096 GB
            </label>
          </div>
        </li>
        <li className="list-group-item">
          <h6 className="card-title">Drive Types</h6>
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
          <h6 className="card-title">Operating Systems</h6>
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
          <h6 className="card-title">Price</h6>
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
  );
};
