import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-page-home",
  templateUrl: "./page-home.component.html",
  styleUrl: "./page-home.component.scss",
})
export class PageHomeComponent {
  public param = { value: "Thang" };

  public constructor(public translate: TranslateService) {}
}
