import { PCSimple } from "./PCSimple";

export type PCsPageResponse = {
  pcs: PCSimple[];
  pagingAndSortingMetadata: PagingAndSortingMetadata;
};

type PagingAndSortingMetadata = {
  pageNumber: number;
  pageSize: number;
  pagesCount: number;
  elementsCount: number;
};
