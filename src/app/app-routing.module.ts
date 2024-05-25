import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Lazy load routes
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./page-home/page-home.module").then((m) => m.PageHomeModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
