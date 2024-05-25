import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-page-home",
  templateUrl: "./page-home.component.html",
  styleUrl: "./page-home.component.scss",
})
export class PageHomeComponent {
  param = { value: "Thang" };

  constructor(public translate: TranslateService) {}
}
