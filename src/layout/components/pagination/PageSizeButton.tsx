import { PagePaginationStyles } from "../../../static/styles/PagePagination";
import { TPagePagination } from "../../../types/TPagePagination";
import Dropdown from "react-bootstrap/Dropdown";

export const PageSizeButton: React.FC<TPagePagination> = ({
    pageNumber,
    pageSize,
    onChangePage,
}) => {
    const pageSizes = [10, 25, 50];
    return (
        <Dropdown style={PagePaginationStyles.pageSize}>
            <Dropdown.Toggle variant="outline-primary" id="page-size">
                {pageSize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {pageSizes.map((size, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => onChangePage(pageNumber, size)}
                    >
                        {size}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
