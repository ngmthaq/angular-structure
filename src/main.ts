import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.env !== "production") {
  (window as any).env = { ...environment, __NOTE__: "This data only existed in non-prod mode" };
  console.log(">>> ENV:", (window as any).env);
}

if (environment.enableLog !== true) {
  console.log = () => {};
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
