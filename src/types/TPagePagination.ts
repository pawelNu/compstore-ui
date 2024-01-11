export type TPagePagination = {
    pagesCount: number;
    pageNumber: number;
    pageSize: number;
    onChangePage: (pageNumber: number, pageSize: number) => void;
};

export type TPageSize = Omit<TPagePagination, "pageNumber">;
