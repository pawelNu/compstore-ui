import { TPagePagination } from "../../../types/TPagePagination";
import { PagePagination } from "./PagePagination";
import { PageSizeButton } from "./PageSizeButton";

export const PaginationComponent: React.FC<TPagePagination> = ({
    pagesCount,
    pageNumber,
    pageSize,
    elementsCount,
    onChangePage,
}) => {
    return (
        <div className="d-flex justify-content-center">
            <PagePagination
                pagesCount={pagesCount}
                pageNumber={pageNumber}
                pageSize={pageSize}
                onChangePage={onChangePage}
                elementsCount={0}
            />
            <PageSizeButton
                pagesCount={pagesCount}
                pageNumber={pageNumber}
                pageSize={pageSize}
                onChangePage={onChangePage}
                elementsCount={0}
            />
        </div>
    );
};
