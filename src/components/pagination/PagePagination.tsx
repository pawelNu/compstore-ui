import { Dropdown, Pagination } from "react-bootstrap";
import { PagePaginationStyles } from "../../static/styles/PagePagination";

export type TPagePagination = {
    pagesCount: number;
    pageNumber: number;
    pageSize: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};

export const PagePagination: React.FC<TPagePagination> = ({
    pagesCount,
    pageNumber,
    pageSize,
    onChangePage,
}) => {
    return (
        <Pagination style={PagePaginationStyles.pagination}>
            <Pagination.First
                key="first"
                className={pageNumber > 0 ? "" : "disabled"}
                onClick={() => onChangePage(0, pageSize)}
            />

            <Pagination.Prev
                key="prev"
                className={pageNumber > 0 ? "" : "disabled"}
                onClick={() => onChangePage(pageNumber - 1, pageSize)}
            />

            <Dropdown style={PagePaginationStyles.dropMargin}>
                <Dropdown.Toggle
                    variant="outline-primary"
                    id="page-size"
                    style={PagePaginationStyles.dropQuadrature}
                >
                    Page: {pageNumber + 1}
                </Dropdown.Toggle>

                <Dropdown.Menu style={PagePaginationStyles.limitDropdown}>
                    {Array.from({ length: pagesCount }, (_, i) => i + 1).map(
                        (page) => (
                            <Dropdown.Item
                                key={page}
                                onClick={() => onChangePage(page - 1, pageSize)}
                            >
                                Page {page}
                            </Dropdown.Item>
                        ),
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Pagination.Next
                key="next"
                className={pageNumber + 1 < pagesCount ? "" : "disabled"}
                onClick={() => onChangePage(pageNumber + 1, pageSize)}
            />

            <Pagination.Last
                key="last"
                className={pageNumber + 1 < pagesCount ? "" : "disabled"}
                onClick={() => onChangePage(pagesCount - 1, pageSize)}
            />
        </Pagination>
    );
};
