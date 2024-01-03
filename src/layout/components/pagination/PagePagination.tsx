import Pagination from "react-bootstrap/Pagination";
import { PagePaginationStyles } from "../../../static/styles/PagePagination";
import { TPagePagination } from "../../../types/TPagePagination";

export const PagePagination: React.FC<TPagePagination> = ({
    pageCount,
    pageNumber,
    onPageChange,
}) => {
    const handlePageClick = (selectedPage: number) => {
        onPageChange(selectedPage);
    };

    const renderPageItems = () => {
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(
                <Pagination.Item key={i} onClick={() => handlePageClick(i)}>
                    {i}
                </Pagination.Item>,
            );
        }
        return pages;
    };

    return (
        <Pagination style={PagePaginationStyles.pagination}>
            <Pagination.First onClick={() => handlePageClick(1)} />
            <Pagination.Prev
                onClick={() => handlePageClick(Math.max(1, pageNumber))}
            />
            {renderPageItems()}
            <Pagination.Ellipsis />
            <Pagination.Next
                onClick={() =>
                    handlePageClick(Math.min(pageCount, pageNumber + 1))
                }
            />
            <Pagination.Last onClick={() => handlePageClick(pageCount)} />
        </Pagination>
    );
};
