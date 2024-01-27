import Dropdown from "react-bootstrap/Dropdown";
import { pagePaginationStyles } from "../../static/styles/PagePagination";

export type TPageSize = {
    pagesCount: number;
    pageSize: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};

export const PageSizeButton: React.FC<TPageSize> = ({
    pageSize,
    onChangePage,
}) => {
    const pageSizes = [10, 25, 50];
    return (
        <Dropdown style={pagePaginationStyles.pageSize}>
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
