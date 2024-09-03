import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./page-home/page-home.module").then((m) => m.PageHomeModule),
  },
  {
    path: "about",
    loadChildren: () => import("./page-about/page-about.module").then((m) => m.PageAboutModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./page-contact/page-contact.module").then((m) => m.PageContactModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then((m) => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
