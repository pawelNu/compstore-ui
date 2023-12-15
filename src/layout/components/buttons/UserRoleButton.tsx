import { useState } from "react";
import { TUserRoleButtonProps } from "../../../types/TUserRoleButtonProps";

export const UserRoleButton: React.FC<TUserRoleButtonProps> = ({
  onUserRoleChange,
}) => {
  const handleOptionClick = (option: string) => {
    setOption(option);
    onUserRoleChange(option);
  };

  const [option, setOption] = useState("Customer");

  return (
    <div className="btn-group me-2">
      <button
        type="button"
        className="btn btn-outline-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {option}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleOptionClick("Customer")}
          >
            Customer
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleOptionClick("Worker")}
          >
            Worker
          </button>
        </li>
      </ul>
    </div>
  );
};
