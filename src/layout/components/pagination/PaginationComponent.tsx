import { TPagePagination } from "../../../types/TPagePagination";
import { PagePagination } from "./PagePagination";
import { PageSizeButton } from "./PageSizeButton";
import { PaginationControl } from "./PaginationControl";

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
            {/* <PaginationControl
                pageNumber={pageNumber}
                pageSize={pageSize}
                pagesCount={pagesCount}
                elementsCount={elementsCount}
                onChangePage={onChangePage}
                between={4}
                next={true}
                last={true}
                ellipsis={1}
            /> */}
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
