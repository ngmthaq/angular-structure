import { NgModule } from "@angular/core";

import { PageContactRoutingModule } from "./page-contact-routing.module";
import { PageContactComponent } from "./page-contact.component";
import { AppCommonModule } from "../app-common/app-common.module";

@NgModule({
  declarations: [PageContactComponent],
  imports: [AppCommonModule, PageContactRoutingModule],
})
export class PageContactModule {}
