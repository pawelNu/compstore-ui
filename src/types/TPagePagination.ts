export type TPagePagination = {
    pagesCount: number;
    pageNumber: number;
    pageSize: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};
