import { UUID } from "crypto";

export type TPCDetails = {
  id: UUID;
  processorBrand: string;
  processorName: string;
  graphicsCardBrand: string;
  graphicsCardName: string;
  ramGBCapacity: number;
  driveGBCapacity: number;
  driveType: string;
  operatingSystem: string;
  price: number;
};
