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
                Items on page: {pageSize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {pageSizes.map((size, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => onChangePage(0, size)}
                    >
                        {size}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
