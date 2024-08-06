import { Publisher as TPublisher } from "../api/publisher/Publisher";

export const PUBLISHER_TITLE_FIELD = "id";

export const PublisherTitle = (record: TPublisher): string => {
  return record.id?.toString() || String(record.id);
};
