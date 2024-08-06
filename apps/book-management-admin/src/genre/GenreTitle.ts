import { Genre as TGenre } from "../api/genre/Genre";

export const GENRE_TITLE_FIELD = "id";

export const GenreTitle = (record: TGenre): string => {
  return record.id?.toString() || String(record.id);
};
