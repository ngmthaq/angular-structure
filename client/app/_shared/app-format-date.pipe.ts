import { Pipe, PipeTransform } from "@angular/core";
import { formatDateTime } from "../../utils";

@Pipe({
  name: "appFormatDate",
})
export class AppFormatDatePipe implements PipeTransform {
  transform(value: string, format: string, ...args: unknown[]): unknown {
    return formatDateTime(value, format);
  }
}
