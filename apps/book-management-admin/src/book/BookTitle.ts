import { Book as TBook } from "../api/book/Book";

export const BOOK_TITLE_FIELD = "id";

export const BookTitle = (record: TBook): string => {
  return record.id?.toString() || String(record.id);
};
