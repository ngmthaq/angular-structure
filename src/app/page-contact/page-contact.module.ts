import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageContactRoutingModule } from "./page-contact-routing.module";
import { PageContactComponent } from "./page-contact.component";

@NgModule({
  declarations: [PageContactComponent],
  imports: [CommonModule, PageContactRoutingModule],
})
export class PageContactModule {}
