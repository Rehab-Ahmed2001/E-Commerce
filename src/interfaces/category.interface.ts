import { IPagination } from "@/interfaces/pagination.interface"
export interface ICategoryResponse {
  results: number;
  metadata: IPagination;
  data: ICategory[];
}
export interface ICategory {
  _id: number;
  name: string;
  slug: string;
  image: string;
  createAt: string;
  updateAT: string;
}