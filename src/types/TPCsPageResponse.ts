import { TPCSimple } from "./TPCSimple";

export type TPCsPageResponse = {
  pcs: TPCSimple[];
  pagingAndSortingMetadata: TPagingAndSortingMetadata;
};

type TPagingAndSortingMetadata = {
  pageNumber: number;
  pageSize: number;
  pagesCount: number;
  elementsCount: number;
};
