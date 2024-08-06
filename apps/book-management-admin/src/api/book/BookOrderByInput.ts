import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
