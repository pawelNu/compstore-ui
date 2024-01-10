import { Pagination } from "react-bootstrap";
import { TPagePagination } from "../../../types/TPagePagination";
import { PagePaginationStyles } from "../../../static/styles/PagePagination";

export const PagePagination: React.FC<TPagePagination> = ({
    pagesCount: pageCount,
    pageNumber,
    pageSize,
    onChangePage,
}) => {
    let items = [];

    if (pageNumber > 0) {
        items.push(
            <Pagination.Prev
                key="prev"
                onClick={() => onChangePage(pageNumber - 1, pageSize)}
            />,
        );
    }

    for (let page: number = 1; page <= pageCount; page++) {
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

    if (pageNumber + 1 < pageCount) {
        items.push(
            <Pagination.Next
                key="next"
                onClick={() => onChangePage(pageNumber + 1, pageSize)}
            />,
        );
    }

    return (
        <Pagination style={PagePaginationStyles.pagination}>{items}</Pagination>
    );
};
