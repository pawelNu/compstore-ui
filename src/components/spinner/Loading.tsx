import { Spinner } from "react-bootstrap";

export const Loading = () => {
    return (
        <div className="d-flex justify-content-center my-3">
            <div className="d-flex align-items-center">
                <Spinner animation="border" role="status" />
                <h2 className="m-0 ms-2">Loading...</h2>
            </div>
        </div>
    );
};
