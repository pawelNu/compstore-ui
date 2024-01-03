export type TPagePagination = {
    pageCount: number;
    pageNumber: number;
    onPageChange: (selectedPage: number) => void;
};
