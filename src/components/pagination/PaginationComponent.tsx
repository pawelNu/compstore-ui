import { PagePagination, TPagePagination } from "./PagePagination";
import { PageSizeButton } from "./PageSizeButton";

export const PaginationComponent: React.FC<TPagePagination> = ({ pagesCount, pageNumber, pageSize, onChangePage }) => {
    return (
        <div className="d-flex justify-content-center">
            <PagePagination
                pagesCount={pagesCount}
                pageNumber={pageNumber}
                pageSize={pageSize}
                onChangePage={onChangePage}
            />
            <PageSizeButton pagesCount={pagesCount} pageSize={pageSize} onChangePage={onChangePage} />
        </div>
    );
};
