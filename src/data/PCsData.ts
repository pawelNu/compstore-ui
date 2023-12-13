import { PCsPageResponse } from "../types/PCsPageResponse";

export const productPCs: PCsPageResponse = {
  pcs: [
    {
      id: "d5977f31-5c2e-4f3b-9c7c-5dad32772fbc",
      processorName: "AMD Ryzen 5 5600X 3,7 - 4,6 GHz",
      graphicsCardName: "NVIDIA GeForce RTX 3060",
      ramGBCapacity: 16,
      price: 949.99,
    },
    {
      id: "dd76d2ea-2ea6-47a1-a9b2-190fb90027cb",
      processorName: "AMD Ryzen 5 3600 3,6 - 4,2 GHz",
      graphicsCardName: "AMD Radeon RX 6600",
      ramGBCapacity: 16,
      price: 999.99,
    },
    {
      id: "ddbb3a00-a494-41f7-9b4f-49e34adbafbc",
      processorName: "Intel Core i7 13gen 13700KF 3,4 - 5,4 GHz",
      graphicsCardName: "NVIDIA GeForce RTX 4070 Ti",
      ramGBCapacity: 32,
      price: 2699.99,
    },
  ],
  pagingAndSortingMetadata: {
    pageNumber: 0,
    pageSize: 10,
    pagesCount: 1,
    elementsCount: 3,
  },
};
