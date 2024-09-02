import { Workshop } from "./workshop.interface";

export interface WorkshopPage {
  workshops: Workshop[];
  totalElements: number;
  totalPages: number;
}
