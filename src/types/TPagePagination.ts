export type TPagePagination = {
    pagesCount: number;
    pageNumber: number;
    pageSize: number;
    elementsCount: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};
