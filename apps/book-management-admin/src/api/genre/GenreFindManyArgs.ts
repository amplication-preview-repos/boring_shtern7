import { GenreWhereInput } from "./GenreWhereInput";
import { GenreOrderByInput } from "./GenreOrderByInput";

export type GenreFindManyArgs = {
  where?: GenreWhereInput;
  orderBy?: Array<GenreOrderByInput>;
  skip?: number;
  take?: number;
};
