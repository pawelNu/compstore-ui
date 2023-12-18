import { TPCSimple } from "./TPCSimple";

export type PCsPageResponse = {
    pcs: TPCSimple[];
    pagingAndSortingMetadata: PagingAndSortingMetadata;
};

type PagingAndSortingMetadata = {
    pageNumber: number;
    pageSize: number;
    pagesCount: number;
    elementsCount: number;
};
