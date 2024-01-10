import { Pagination } from "react-bootstrap";
import { TPagePagination } from "../../../types/TPagePagination";
import { PagePaginationStyles } from "../../../static/styles/PagePagination";

export const PagePagination: React.FC<TPagePagination> = ({
    pagesCount,
    pageNumber,
    pageSize,
    onChangePage,
}) => {
    let items = [];

    items.push(
        <Pagination.Prev
            key="prev"
            className={pageNumber > 0 ? "" : "disabled"}
            onClick={() => onChangePage(pageNumber - 1, pageSize)}
        />,
    );

    for (let page: number = 1; page <= pagesCount; page++) {
        items.push(
            <Pagination.Item
                key={page}
                data-page={page}
                active={page === pageNumber + 1}
                onClick={() => {
                    console.log("PagePagination - clicked page:", page);
                    onChangePage(page - 1, pageSize);
                }}
            >
                {page}
            </Pagination.Item>,
        );
    }

    items.push(
        <Pagination.Next
            key="next"
            className={pageNumber + 1 < pagesCount ? "" : "disabled"}
            onClick={() => onChangePage(pageNumber + 1, pageSize)}
        />,
    );

    return (
        <Pagination style={PagePaginationStyles.pagination}>{items}</Pagination>
    );
};
