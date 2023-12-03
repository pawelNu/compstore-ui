import { UUID } from "crypto";

export type PCSimple = {
  id: UUID;
  processorName: string;
  graphicsCardName: string;
  ramGBCapacity: number;
  price: number;
};
