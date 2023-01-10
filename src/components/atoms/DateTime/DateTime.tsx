import { formatDateToYYYYMMDD } from "../../../lib/utils/dateFormat";

type Props = {
  classes?: string[];
  date: string;
};

export const DateTime: React.FC<Props> = ({ date, classes }) => {
  return (
    <time className={classes ? classes.join(" ") : ""} dateTime={date}>
      {formatDateToYYYYMMDD(date)}
    </time>
  );
};
