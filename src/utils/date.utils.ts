import dayjs from "dayjs";

// https://day.js.org/docs/en/display/format#list-of-all-available-formats
export const DATE_FORMATS = {
  "DD/MM/YYYY": "DD/MM/YYYY",
};

export function getCurrentUnixTimestampInMilliseconds(): number {
  return Date.now();
}

export function getCurrentUnixTimestampInSeconds(): number {
  return Math.round(Date.now() / 1000);
}

export function isDateValidWithFormat(
  date: string,
  format: string = DATE_FORMATS["DD/MM/YYYY"],
): boolean {
  return dayjs(date, format, true).isValid();
}

export function getDateTimeWithFormat(
  date: string,
  format: string = DATE_FORMATS["DD/MM/YYYY"],
): string {
  return dayjs(date).format(format);
}
