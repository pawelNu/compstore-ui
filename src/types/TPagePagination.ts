export type TPagePagination = {
    pageCount: number;
    pageNumber: number;
    pageSize: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};
