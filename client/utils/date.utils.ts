import dayjs from "dayjs";

// https://day.js.org/docs/en/display/format#list-of-all-available-formats
export const DATE_FORMATS = {
  main: "DD/MM/YYYY",
};

export function getCurrentUnixTimestampInMilliseconds(): number {
  return Date.now();
}

export function getCurrentUnixTimestampInSeconds(): number {
  return Math.round(Date.now() / 1000);
}

export function isValidDateFormat(date: string, format: string = DATE_FORMATS.main): boolean {
  return dayjs(date, format, true).isValid();
}

export function formatDateTime(date: string, format: string = DATE_FORMATS.main): string {
  return dayjs(date).format(format);
}
