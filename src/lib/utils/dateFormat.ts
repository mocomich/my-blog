import { format, utcToZonedTime } from "date-fns-tz";

export const formatDateToYYYYMMDD = (date: string) => {
  const jstDate = utcToZonedTime(date, "Asia/Tokyo");

  return format(jstDate, "yyyy-MM-dd", { timeZone: "Asia/Tokyo" });
};
