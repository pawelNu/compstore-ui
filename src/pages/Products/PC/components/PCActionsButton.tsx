import { UUID } from "crypto";

export const PCActionsButton = ({
  deletePc,
  id,
}: {
  deletePc: (id: UUID) => void;
  id: UUID;
}) => {
  return (
    <div className="dropdown ms-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Actions
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/">
            Update
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"></hr>
        </li>
        <li>
          <button
            className="dropdown-item bg-danger text-white"
            onClick={() => deletePc(id)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};
