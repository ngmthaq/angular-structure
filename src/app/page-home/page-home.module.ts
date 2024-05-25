import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageHomeRoutingModule } from "./page-home-routing.module";
import { PageHomeComponent } from "./page-home.component";
import { AppTranslateModule } from "../app-translate/app-translate.module";

@NgModule({
  declarations: [PageHomeComponent],
  imports: [CommonModule, PageHomeRoutingModule, AppTranslateModule],
})
export class PageHomeModule {}
