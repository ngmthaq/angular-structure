import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppTranslateModule } from "../app-translate/app-translate.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AppTranslateModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, AppTranslateModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class AppCommonModule {}
