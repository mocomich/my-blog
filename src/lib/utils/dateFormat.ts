import { format } from "date-fns";

export const formatDateToYYYYMMDD = (date: string) => {
  return format(new Date(date), "yyyy-MM-dd");
};
